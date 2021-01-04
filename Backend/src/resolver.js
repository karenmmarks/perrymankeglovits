const bcrypt = require('bcrypt');
const {
  select, insert, update, deleteFrom,
} = require('./database/database');

const getPlayer = async (_, args) => {
  const { userName } = args;
  const player = await select('PlayerInfo', 'userName', `userName="${userName}"`);

  if (player && player.length > 0) {
    const data = {};
    let currKey = '';

    Object.keys(player[0]).forEach((key) => {
      if (key.includes('Split')) {
        currKey = player[0][key];
      } else {
        data[currKey] = {
          ...(data[currKey] && data[currKey]),
          [key]: player[0][key],
        };
      }
    });

    return data;
  }
  return null;
};

module.exports = {
  Query: {
    login: async (_, args) => {
      const { userName, password } = args;

      const account = await select('UserAccounts', 'userName', `userName="${userName}"`);

      if (account && account.length > 0) {
        if (await bcrypt.compare(password, account[0].password)) {
          return {
            ...account[0],
            player: async () => {
              const player = await getPlayer(null, { userName });
              return player;
            },
          };
        }
        throw new Error('Your password is incorrect, please try again.');
      }
      throw new Error('Username does not exist.');
    },
    player: getPlayer,
    players: async () => {
      const players = await select('PlayerInfo', 'userName', null);

      return players.map((player) => {
        const data = {};
        let currKey = '';
        Object.keys(player).forEach((key) => {
          if (key.includes('Split')) {
            currKey = player[key];
          } else {
            data[currKey] = {
              ...(data[currKey] && data[currKey]),
              [key]: player[key],
            };
          }
        });

        return data;
      });
    },
  },

  Mutation: {
    createAccount: async (_, args) => {
      const { account } = args;
      const newAccount = {
        ...account,
        password: await bcrypt.hash(String(account.password), 10),
        currentYear: (() => {
          const date = new Date();

          if (date.getMonth() > 8) return date.getFullYear() + 1;
          return date.getFullYear();
        })(),
      };

      await insert('UserAccounts', newAccount);

      return newAccount;
    },

    createPlayer: async (_, args) => {
      const { player, userName } = args;
      const { info, web, printer } = player;

      await insert('PlayerInfo', {
        userName,
        ...info,
        ...web,
        ...printer,
      });

      return player;
    },

    updateAccount: async (_, args) => {
      const { account } = args;
      if (account.password || account.userName) throw new Error('Cannot update username or password with updateAccount');

      await update('UserAccounts', account);

      return account;
    },

    updateUserName: async (_, args) => {
      const { oldUserName, newUserName } = args;

      const account = await select('UserAccounts', 'userName', `userName="${oldUserName}"`);
      const player = await select('PlayerInfo', 'userName', `userName="${oldUserName}"`);

      if (account && account.length > 0) {
        await insert('UserAccounts', {
          userName: newUserName,
          ...account[0],
        });
      }

      if (player && player.length > 0) {
        await insert('PlayerInfo', {
          userName: newUserName,
          ...player[0],
        });
      }

      await deleteFrom('UserAccounts', `username="${oldUserName}"`);
      await deleteFrom('PlayerInfo', `username="${oldUserName}"`);

      return {
        userName: newUserName,
        ...account[0],
      };
    },

    updatePassword: async (_, args) => {
      const { userName, oldPassword, newPassword } = args;
      const account = await select('UserAccounts', 'userName', `userName="${userName}"`);

      if (account && account.length > 0) {
        if (await bcrypt.compare(oldPassword, account[0].password)) {
          await update('UserAccounts', {
            password: await bcrypt.hash(String(newPassword), 10),
            ...account[0],
          });

          return account[0];
        }
        throw new Error('Your password is incorrect, please try again.');
      }
      throw new Error('Username does not exist.');
    },

    updatePlayer: async (_, args) => {
      const { player, userName } = args;
      const { info, web, printer } = player;

      await update('PlayerInfo', {
        userName,
        ...info,
        ...web,
        ...printer,
      });

      return player;
    },

  },
};

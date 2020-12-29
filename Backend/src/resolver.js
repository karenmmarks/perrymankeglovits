const bcrypt = require('bcrypt');
const { select, insert, update } = require('./database/database');

module.exports = {
  Query: {
    login: async (_, args) => {
      const { userName, password } = args;

      const account = await select('UserAccounts', 'userName', `userName="${userName}"`);

      if (account && account.length > 0) {
        if (await bcrypt.compare(password, account[0].password)) return account[0];
        throw new Error('Your password is incorrect, please try again.');
      }
      throw new Error('Username does not exist.');
    },
    player: async (_, args) => {
      const { userName } = args;
      const player = {
        info: () => select('PlayerInfo', 'userName', `userName="${userName}"`)[0],
        web: () => select('WebInfo', 'userName', `userName="${userName}"`)[0],
        printer: () => select('PrinterInfo', 'userName', `userName="${userName}"`)[0],
      };

      return player;
    },
    players: async () => {
      const accounts = await select('UserAccounts', 'userName', null);
      const players = await accounts.map(({ userName }) => ({
        info: async () => {
          const info = await select('PlayerInfo', 'userName', `userName="${userName}"`);

          if (info.length > 0) return info[0];
          return null;
        },
        web: async () => {
          const web = await select('WebInfo', 'userName', `userName="${userName}"`);

          if (web.length > 0) return web[0];
          return null;
        },
        printer: async () => {
          const printer = await select('PrinterInfo', 'userName', `userName="${userName}"`);

          if (printer.length > 0) return printer[0];
          return null;
        },
      }));

      return players;
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

      await insert('PlayerInfo', { ...info, userName });
      await insert('WebInfo', { ...web, userName });
      await insert('PrinterInfo', { ...printer, userName });

      return player;
    },

  },
};

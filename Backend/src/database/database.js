const mysql = require('mysql');
const {
  MYSQL_HOST, MYSQL_USERNAME, MYSQL_PASSWORD, MYSQL_DATABASE,
} = require('../config');

const connect = () => {
  const con = mysql.createConnection({
    host: MYSQL_HOST,
    user: MYSQL_USERNAME,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
  });

  con.connect((err) => {
    if (err) throw err;
  });

  return con;
};

const insert = (table, object) => new Promise((resolve, reject) => {
  const connection = connect();

  const query = `
    INSERT INTO ${table}
    (${Object.keys(object).join(',')})
    VALUES ("${Object.values(object).join('","')}")`;

  connection.query(query, (err) => {
    if (err) {
      connection.end();
      reject(err);
    } else {
      connection.end();
      resolve();
    }
  });
});

const update = (table, object, where) => new Promise((resolve, reject) => {
  const connection = connect();

  const query = `
    UPDATE ${table}
    SET (${Object.keys(object).map((key) => `${key}="${object[key]}"`).join(',')})
    WHERE ${where}`;

  connection.query(query, (err) => {
    if (err) {
      connection.end();
      reject(err);
    } else {
      connection.end();
      resolve();
    }
  });
});

const select = (table, orderByProp, where, direction = 'ASC') => new Promise((resolve, reject) => {
  const connection = connect();

  const query = `
    SELECT * 
    FROM ${table}
    ${(where) ? `WHERE ${where}` : ''}
    ORDER BY ${orderByProp} ${direction}`;

  connection.query(query, (err, res) => {
    if (err) {
      connection.end();
      reject(err);
    } else {
      connection.end();
      resolve(
        res.map((row) => {
          const data = {};
          Object.keys(row).forEach((key) => {
            data[key] = row[key];
          });
          return data;
        }),
      );
    }
  });
});

module.exports = {
  insert,
  update,
  select,
};

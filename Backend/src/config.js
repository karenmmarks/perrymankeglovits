const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  MYSQL_HOST: process.env.MYSQL_HOST,
  MYSQL_USERNAME: process.env.MYSQL_USERNAME,
  MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
  MYSQL_DATABASE: process.env.MYSQL_DATABASE,
};

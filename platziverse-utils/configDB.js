const debug = require('debug')('platziverse:utils')

const configDB = {
  database: process.env.DB_NAME || "platziverse",
  username: process.env.DB_USER || "platzi",
  password: process.env.DB_PASS || "platzi",
  host: process.env.DB_HOSWT || "localhost",
  dialect: "postgres"
};

module.exports = {
  configDB
};

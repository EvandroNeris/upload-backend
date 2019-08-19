require('dotenv').config()

module.exports = {
  username: process.env.USERNAME,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  host: process.env.HOST,
  port: process.env.PORTDB || 3306,
  dialect: process.env.DIALECT || 'mysql',
}

// Update with your config settings.
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()

module.exports = {
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },

  pool: {
    min: 2,
    max: 10
  }
}

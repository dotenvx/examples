// index.js
require('@dotenvx/dotenvx').config()

exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: `Hello ${process.env.HELLO}`
  }
}

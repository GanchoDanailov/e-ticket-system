const path = require('path')

let rootPath = path.normalize(path.join(__dirname, '/../../'))

module.exports = {
  development: {
    rootPath: rootPath,
    db: 'mongodb://gancho:gancho@ds141937.mlab.com:41937/e-ticket',
    port: 1337
  },
  production: {
    rootPath: rootPath,
    db: process.env.MONGO_DB_CONN_STRING,
    port: process.env.port
  }
}

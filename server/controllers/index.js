let homeController = require('./home-controller')
let usersController = require('./users-controller')
let threadsController = require('./threads-controller')

module.exports = {
  home: homeController,
  users: usersController,
  threads: threadsController
}

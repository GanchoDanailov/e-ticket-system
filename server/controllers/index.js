let homeController = require('./home-controller')
let usersController = require('./users-controller')
let threadsController = require('./threads-controller')
let codesController = require('./codes-controller')

module.exports = {
  home: homeController,
  users: usersController,
  threads: threadsController,
  codes: codesController
}

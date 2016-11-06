const controllers = require('../controllers')
const auth = require('../config/auth')

module.exports = (app) => {
  app.get('/', controllers.home.index)
  app.get('/about', controllers.home.about)

  // Only guest users for now and admin
  // -------------------------
  // app.get('/users/register', controllers.users.register)
  // app.post('/users/create', controllers.users.create)
  // -------------------------
  app.get('/users/login', controllers.users.login)
  app.post('/users/authenticate', controllers.users.authenticate)
  app.post('/users/logout', controllers.users.logout)

  // Codes
  app.get('/codes/add', controllers.codes.add)
  app.get('/codes/avaible', controllers.codes.avaible)
  app.post('/codes/changeReservedStatus/:id', controllers.codes.changeReservedStatus)
  app.post('/codes/create', controllers.codes.create)

  app.get('/threads/create', auth.isAuthenticated, controllers.threads.create)

  app.all('*', (req, res) => {
    res.status(404)
    res.send('Not Found')
    res.end()
  })
}

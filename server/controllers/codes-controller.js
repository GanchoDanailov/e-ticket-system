// let Code = require('mongoose').model('Code')
let Code = require('../data/Code')
module.exports = {
  add: (req, res) => {
    res.render('codes/add')
  },
  create: (req, res) => {
    let code = req.body
    if (code.code === '') {
      code.globalError = 'Please input code string'
      res.render('codes/add', code)
    } else {
      Code
        .create(code)
        .then(() => {
          console.log('code saved')
          res.redirect('/codes/avaible')
        })
    }
  },
  changeReservedStatus: (req, res) => {
    let id = req.params.id
    // Code.update({ _id: id }, { '$bit': { 'isReserved': { xor: 1 } } })
    //   .then(code => {
    //     console.log(code)
    //   })
    Code
      .findOne({ _id: id })
      .then(code => {
        Code
          .update({_id: id}, {
            isReserved: !code.isReserved
          }).then(() => {
            console.log('changed reserved status for: ' + id)
          })
      })
  },
  avaible: (req, res) => {
    let allCodes = {}
    // Code
    //   .find({})
    //   .then(codes => {
    //     console.log(codes)
    //   })
    Code
      .find({
        'isUsed': 'false'
      })
      .then(codes => {
        allCodes.allAvaible = codes
        console.log('all codes that are not used:' + allCodes.allAvaible)
        res.render('codes/avaible', {allCodes: allCodes})
      })
  }
}

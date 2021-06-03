const { user, par } = require('./UandP_Model')

function getUserListFromDb() {
  let query = user.find()
  return new Promise((resolve, reject) => {
    query.exec(function (err, resu) {
      if (err) {
        reject(err)
      }
      if (resu) {
        resolve(resu)
      }
    })
  })
}

function getPartTimeFromDb() {
  let query = par.find()
  return new Promise((resolve, reject) => {
    query.exec(function (err, resu) {
      if (err) {
        reject(err)
      }
      if (resu) {
        resolve(resu)
      }
    })
  })
}

module.exports = { getUserListFromDb, getPartTimeFromDb }

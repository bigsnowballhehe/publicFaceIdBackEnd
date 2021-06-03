const { connectDb } = require('../con_mongo/connectDb')

function getCheck(objBody) {
  // connectDb()
  let obj = {}
  let makeData = (body) => {
    for (key in body) {
      if (body[key] != null) {
        obj[key] = body[key]
      }
    }
  }
  makeData(objBody)

  //console.log(arry)
  return obj
}

module.exports = {
  getCheck,
}

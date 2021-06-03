const mongoose = require('mongoose')

let baidu_api = mongoose.Schema({
  id: String,
  group_id: String,
  name: String,
  time: String,
})

let til = mongoose.model('checkin', baidu_api, 'checkin')

module.exports = {
  til,
}

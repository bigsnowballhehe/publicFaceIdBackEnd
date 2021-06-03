const mongoose = require('mongoose')
const getAllinfo = require('./createAllUserInfo')
let { user_list, part_time } = require('./getPhoneName')
const { connectDb } = require('./connectDb')
let newT = []
let temp = []

// 接受一个组ID，还有数据库的module名字
async function writeUserList(group_id, doc) {
  if (doc == 'user_list') {
    temp = user_list
  } else if (doc == 'part_time') {
    temp = part_time
  }
  const result = getAllinfo(group_id)
  connectDb()

  let dat = await result
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        data[i] = { ...data[i], ...temp[i] }
        newT[i] = data[i]
      }
      return newT
      // console.log(newT)
    })
    .catch((err) => {
      console.log(err)
    })
  let baidu_api = mongoose.Schema({
    id: String,
    user_info: { type: Number, index: true, unique: true },
    group_id: String,
    name: String,
  })
  let til = mongoose.model(doc, baidu_api)
  til.on('index', function () {
    til.insertMany(dat, onInsert)
  })

  function onInsert(err, docs) {
    if (err) {
      console.log(err)
      db.close()
    } else {
      console.info('%d potatoes were successfully stored.', docs.length)
      db.close()
    }
  }

  // let doc = new user_list(data[i])
  // doc.save(function (err) {
  //     if (err) {
  //         console.log("charushibai")
  //         db.close()
  //     } else {
  //         db.close()
  //     }

  // })

  // user_info.find((err, data) => {       // 找所有docm
  //     if (err) {
  //         console.log(err)
  //         db.close()
  //     }
  //     else {
  //         console.log(data)
  //         db.close()
  //     }
  // }
  // )
}

module.exports = {
  writeUserList,
}

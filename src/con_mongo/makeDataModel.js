const mongoose = require('mongoose')
const getAllinfo = require('./createAllUserInfo')
let { user_list, part_time } = require('./getPhoneName')
const { connectDb } = require('./connectDb')
const { til } = require('./userCheckModel')
let newT = []
let temp = []

// 接受一个组ID，还有数据库的module名字
async function writeUserCheckMany(group_id, time) {
  if (group_id == 'LearnTest') {
    temp = user_list
  } else if (group_id == 'part_time') {
    temp = part_time
  }
  connectDb()
  const result = getAllinfo(group_id)
  let dat = await result
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        data[i] = { ...data[i], ...temp[i] }
        newT[i] = data[i]
        newT[i].time = time
      }
      //console.log(newT)
      return newT
    })
    .catch((err) => {
      console.log(err)
    })
  //console.log(dat)

  til.collection.insertMany(dat, function (err, pro) {
    if (err) {
      console.log(err)
    } else if (pro) {
      console.log(pro)
    }
  })

  //console.log(dat)
}

module.exports = {
  writeUserCheckMany,
}

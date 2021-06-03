// 实现功能，接收传过来的base64图片，然后执行一个任务，负责打卡到数据库，一个流程过去。
// 要写的内容，字段名？
// id  姓名  打卡时间
const mongoose = require('mongoose')
let { user_list, part_time } = require('./getPhoneName')
let { til } = require('./userCheckModel')
// let { connectDb } = require('./connectDb')
let tmp = []

async function writeUserCheck(group_id, id, user_info, stamp) {
  if (group_id == 'LearnTest') {
    tmp = user_list
    //console.log(user_list)
  } else if (group_id == 'part_time') {
    tmp = part_time
  }

  let userName = ''
  for (let index = 0; index < tmp.length; index++) {
    const element = tmp[index]

    if (element.user_info == user_info) {
      userName = element.name
      console.log(userName)
    }
  }

  let dat = {
    id,
    group_id,
    user_info,
    name: userName,
    time: stamp,
  }

  let doc = new til(dat)
  doc.save(function (err, product) {
    if (err) {
      console.log(err)
    } else {
      console.log(product)
    }
  })
}

module.exports = { writeUserCheck }

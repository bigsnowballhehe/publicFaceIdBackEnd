const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const {
  getUserListFromDb,
  getPartTimeFromDb,
} = require('./con_mongo/getUserListFrom') // 可以读取

const { setFace_search } = require('./con_baidu/axios-post-search')
const { writeUserCheck } = require('./con_mongo/userCheckIn')
const { getCheck } = require('./selectDb/index.js')
const { til } = require('./con_mongo/userCheckModel')

// // 处理静态资源
// app.use(express.static('public'))
// 处理参数
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// 设置允许跨域访问该服务
app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS')
  res.header('Access-Control-Allow-Headers', [
    'X-Requested-With',

    'content-type',
  ])
  res.header('content-type', 'application/json')

  next()
})
app.get('/par', async (req, res) => {
  // get 接口，給获取人员用的

  const part_time = getPartTimeFromDb()
  let data = await part_time.catch((err) => {
    console.log(err)
  })
  //console.log(data)
  res.send(data)
})

app.get('/list', async (req, res) => {
  // get 接口，給获取人员用的

  const user = getUserListFromDb()
  let data = await user.catch((err) => {
    console.log(err)
  })
  res.send(data)
})
// 打卡接口
app.post('/faceid/post-face', async (req, res) => {
  let photo = req.body.photo
  setFace_search('LearnTest,part_time', photo)
    .then((data) => {
      let dat = data.data

      //console.log(dat.result.user_list[0])
      if (dat.error_code == 0) {
        let dataRes = dat.result.user_list[0]
        let score = dataRes.score
        //console.log(dataRes.score)
        if (dataRes.score > 80) {
          let time = dat.timestamp
          //console.log(time)
          let gid = dataRes.group_id
          let uid = dataRes.user_id
          let uinfo = dataRes.user_info
          writeUserCheck(gid, uid, uinfo, time)
          res.send({
            code: 200,
            score,
            time,
          })
        } else {
          res.send({
            code: 201,
            msg: '重新采集，过于模糊',
          })
        }
      } else {
        res.send({
          code: 0,
          msg: '没有人脸',
        })
      }
    })
    .catch((err) => {
      console.log(err)
    })
})

app.post('/get-check', async (req, res) => {
  const arry = getCheck(req.body.data)
  //console.log(arry)
  query = til.find(arry, null, {}).limit(50).sort('-time')
  let arr = []
  await query.then((per, err) => {
    if (err) {
      console.log(err)
    } else if (per) {
      for (val in per) {
        // console.log(per[val]._doc)
        arr.push(per[val]._doc)
        //console.log(arry)
      }
    }
  })

  res.send(arr)
})
app.listen(3000, () => {
  console.log('running...')
})

let https = require('https')
let qs = require('querystring')
let fs = require('fs')
let path = require('path')

function setToken() {
  // 方法，发送请求，获取一个token，向百度发送，然后写进，baiud-token.json

  const param = qs.stringify({
    grant_type: 'client_credentials',
    client_id: 'yourid', // 客户端ID和密码
    client_secret: 'yours',
  })

  https.get(
    {
      hostname: 'aip.baidubce.com',
      path: '/oauth/2.0/token?' + param,
      agent: false,
    },
    function (res) {
      // 在标准输出中查看运行结果
      res.pipe(process.stdout)
      let file = path.join(__dirname, './baidu-token.json')
      res.pipe(fs.createWriteStream(file)) // 写进json里面。
    }
  )
}
// 给外界获取，token的方法，通过返回一个promise对象，来获得对token的使用。
function getToken() {
  let file = path.join(__dirname, './baidu-token.json')

  return new Promise((resolve, reject) => {
    fs.readFile(file, 'utf-8', function (err, data) {
      if (err) {
        console.log('cuowu')
      } else {
        let Btoken = data.toString()

        resolve(Btoken) //这里是因为，还没得到结果就return
        //console.log(Btoken)
      }
    })
  })
}

// let token = getToken()
// token.then(data => {
//     console.log(data)
// })
//setToken()
module.exports = {
  setToken,
  getToken,
}

//access_token=24.b3344bd563a69eb0f8bf74871efcd320.2592000.1606549415.282335-22870940",

//需要完成对response的解析，然后提取出来。

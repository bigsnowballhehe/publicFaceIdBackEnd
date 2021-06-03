let axios = require('axios')
let qs = require('querystring')
const fs = require('fs')
const { getToken } = require('./accessTokenSend')

async function get_Users(group_id) {
  let obj = qs.stringify({
    group_id: group_id,
  })

  let preToken =
    'https://aip.baidubce.com/rest/2.0/face/v3/faceset/group/getusers?access_token='
  let tokenn = getToken()
  let token = await tokenn.then((data) => {
    too = JSON.parse(data)
    Atoken = too['access_token']
    tokken = preToken + Atoken
    return tokken
  })
  //console.log(token)
  return axios({
    method: 'post',
    url: `${token}`, //正确的拼接方式
    // 传递参数
    data: obj,
    // 设置请求头信息
    headers: {
      'Content-Type': 'application/json',
    },
    responseType: 'json',
  })
}

module.exports = {
  get_Users,
}

// // catch(error => {
//             // 请求失败，
//             let err = JSON.stringify(error)
//             let ws = fs.createWriteStream('./erro.json')
//             ws.write(err)
//                 //console.log(err)

//         })

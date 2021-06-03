// 作用域问题
const { parse } = require('./changJpgToBase64')
let axios = require('axios')
let qs = require('querystring')
const { getToken } = require('./accessTokenSend')

async function setFace_search(group_id, photo) {
  // let base64 = parse(path) //人脸已经注册，完成了对林允儿的注册。
  let base64 = photo
  let obj = qs.stringify({
    image: base64,
    image_type: 'BASE64',
    group_id_list: group_id,
  })

  let preToken =
    'https://aip.baidubce.com/rest/2.0/face/v3/search?access_token='
  let tokenn = getToken()
  token = await tokenn.then((data) => {
    too = JSON.parse(data)
    Atoken = too['access_token']
    token = preToken + Atoken
    return token
  })
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
  setFace_search,
}

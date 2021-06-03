let axios = require('axios');
let qs = require('querystring');
const fs = require('fs')
const { getToken } = require('./accessTokenSend')

async function get_FaceList(user_id, group_id) {



    let obj = qs.stringify({
        'user_id': user_id,
        'group_id': group_id,

    });


    let preToken = "https://aip.baidubce.com/rest/2.0/face/v3/faceset/face/getlist?access_token="
    let tokenn = getToken()
    token = await tokenn.then(data => {
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
        responseType: 'json'
    })

}

module.exports = {
    get_FaceList
}
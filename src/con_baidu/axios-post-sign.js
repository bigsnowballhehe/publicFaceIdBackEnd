// 完成对base64编码后的图片进行一个提交给百度智能云
let axios = require('axios');
let qs = require('querystring');
let { parse } = require('./changJpgToBase64')
let { getToken, setToken } = require('./accessTokenSend');
//const { type } = require('os');
const fs = require('fs')


//接受一个图片地址，然后完成注册
//let Otoken = "https://aip.baidubce.com/rest/2.0/face/v3/faceset/user/add?access_token="

// 作用域问题
async function setFace_sign(path, group_id, user_id, user_info) {

    let base64 = parse(path) //人脸已经注册，完成了对林允儿的注册。

    let obj = qs.stringify({
        'image': base64,
        'image_type': "BASE64",
        'group_id': group_id,
        'user_id': user_id,
        'user_info': user_info



    });


    let preToken = "https://aip.baidubce.com/rest/2.0/face/v3/faceset/user/add?access_token="
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
    setFace_sign
}
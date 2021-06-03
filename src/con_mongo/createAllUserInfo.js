const { get_Users } = require('../con_baidu/axios-post-getusers')
const { get_UserInfo } = require('../con_baidu/axios-post-info')
//const { emp } = require('./getPhoneName')

let tem = []

async function getAllinfo(group_id) {
  let result = get_Users(group_id) //不对外..改组别就好
  let arr_id = await result
  let id_arr = arr_id.data.result.user_id_list // 返回数组
  let length = id_arr.length

  return new Promise((resolve, reject) => {
    let i = 0
    let inter = setInterval(function () {
      let result = get_UserInfo(id_arr[i], group_id)
      tem[i] = { id: id_arr[i] }
      //console.log(id_arr[i])

      result
        .then((response) => {
          tmp = response.data.result.user_list[0]
          tem[i - 1] = { ...tem[i - 1], ...tmp }
          // console.log(tem)
          if (i == length) {
            // 判断不放这的话，ID一达到长度就退出了。
            clearInterval(inter)
            resolve(tem)
          }
        })
        .catch((err) => {
          console.log(err)
          reject(err)
        })
      i++
    }, 700)
  })
}

module.exports = getAllinfo

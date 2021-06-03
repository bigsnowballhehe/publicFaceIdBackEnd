//获取token专用，毕竟30天就会失效一次
const { setToken } = require('./src/con_baidu/accessTokenSend')
setToken()

// const { writeUserCheck } = require('./src/con_mongo/userCheckIn')

// const { get_Users } = require("./axios-post-getusers");
// let result = get_Users("LearnTest");

// const { get_UserInfo } = require('./axios-post-info')
// let result = get_UserInfo('23388','LearnTest')
// 获取数据完，还是得，写进数据库，然后访问数据库，不然太久了。

// const getAllinfo = require('./src/con_mongo/createAllUserInfo')  获取所有list
// let { emp } = require('./src/con_mongo/getPhoneName')

// const result = getAllinfo()
// let newT = []
// result.then(data => {
//     for (let i = 0; i < data.length; i++) {
//         data[i] = { ...data[i], ...emp[i] }
//         newT[i] = data[i]

//     }
//     console.log(newT)
// }).catch(err => {
//     console.log(err)
// }
// )

// const {get_FaceList} = require('./axios-post-getFaceList')
// let result = get_FaceList('23372','LearnTest')

// 返回组id userid userinfo  score分数
// const { setFace_search } = require("./src/con_baidu/axios-post-search");
// let result = setFace_search("./assets/jpg_search/weiface.png", "LearnTest");
// result
//   .then((response) => {
//     console.log(response.data.result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// const {setFace_sign} = require('./axios-post-sign')
// let result = setFace_sign('./jpg_sign/zyf1.jpg','LearnTest','zyf1','node')
// result.then((response)=>{
//     console.log(response.data)
// }).catch((err)=>{
//     console.log(err)
// })

// const { writeUserList } = require('./src/con_mongo/writeUserListToDb')
// //调用这个就能，把所有人写进，数据库

// writeUserList('LearnTest', 'user_list') // 第一个是组ID，第二个是数据库 封装好了

// const {getUserList} = require('./src/con_mongo/getUserListFromDb')   // 可以读取

//  const result = getUserList("part_time")

// result.then(function(err,resu){
//     if(err){
//         console.log(err)
//     }
//     if(resu){
//         console.log(resu)
//     }
// }).catch(err=>{
// console.log(err)
// })

// writeUserCheck('LearnTest', 2332, 18818398018)

// const { writeUserCheckMany } = require('./src/con_mongo/makeDataModel')

// writeUserCheckMany('LearnTest', '1619138700')

// writeUserCheckMany('part_time', '1611535800')

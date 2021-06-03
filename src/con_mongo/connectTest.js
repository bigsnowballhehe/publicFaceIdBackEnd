const mongoose = require('mongoose')

function sendPost() {
  let db = mongoose.connection
  const connection =
    'mongodb+srv://snfz:sbsb233@cluster0.ineh3.mongodb.net/baidu_api?retryWrites=true&w=majority'
  mongoose.connect(connection, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true,
  })

  db.on('error', console.error.bind(console, 'connection error:'))

  db.once('open', function () {
    console.log('connection true' + connection)
  })

  let baidu_api = mongoose.Schema({
    id: String,
    user_info: Number,
    group_id: String,
    name: String,
  })
  let user_info = mongoose.model('user_list', baidu_api) //不小心名字多个空空白格
  // let doc = new user_info({name:"xietingfeng",work_id:"201710215"})
  // doc.save(function(err){
  //     if(err){
  //         console.log("charushibai")
  //         db.close()
  //     }else{
  //         db.close()
  //     }

  // })

  user_info.find((err, data) => {
    // 找所有docm
    if (err) {
      console.log(err)
      db.close()
    } else {
      console.log(data)
      db.close()
    }
  })
}

exports.sendPost = sendPost

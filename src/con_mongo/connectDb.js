const mongoose = require('mongoose')
let db = mongoose.connection
function connectDb() {
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

  // 完整的schema  _id应该是objectid
  // let listin = mongoose.Schema()
  // // let id ="10006546"
  // // let objectId = mongoose.Schema.Types.ObjectId(id)
  // // console.log(objectId)

  // let listingsAndReview = mongoose.model('listingsAndReviews',listin,"listingsAndReviews")
  // listingsAndReview.find({beds:2},(err,bnb)=>{
  //     if(err){
  //         console.log(err)
  //         db.close()
  //     }
  //     else{
  //         console.log(bnb)
  //         db.close()
  //     }
  // })
}
function closeDb() {
  db.close()
}
module.exports = {
  connectDb,
  closeDb,
}

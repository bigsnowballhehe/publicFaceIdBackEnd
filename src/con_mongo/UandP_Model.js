const mongoose = require('mongoose')

let db = mongoose.connection
const connection = "mongodb+srv://snfz:sbsb233@cluster0.ineh3.mongodb.net/baidu_api?retryWrites=true&w=majority"
mongoose.connect(connection, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: true
})

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', function() {
    console.log("connection true")
})

let baidu_api = mongoose.Schema({
    id: String,
    user_info: { type: Number, index: true, unique: true },
    group_id: String,
    name: String
})

let user = mongoose.model("user_list", baidu_api)
let par = mongoose.model("part_time", baidu_api)






module.exports = { user, par }
  
const mongoose = require("mongoose")
const tableSchema = mongoose.Schema({
type: String,
price: Number,
flavor: String
})
module.exports = mongoose.model("table", tableSchema)
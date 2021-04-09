  
const mongoose = require("mongoose")
const tableSchema = mongoose.Schema({
Brand: String,
quality: String,
cost: Number
})
module.exports = mongoose.model("table", tableSchema)
  
const mongoose = require("mongoose")
const tableSchema = mongoose.Schema({
Brand: String,
quality: String,
cost: {type: Number, min: 100, max: 500}
})
module.exports = mongoose.model("table", tableSchema)
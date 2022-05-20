const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bodyToDoSchema = new Schema({
    text:{
        type: String,
        require: true,
    }
},{timestamps: true});
const BodyToDoSchema = mongoose.model('BodyToDoSchema', bodyToDoSchema);
module.exports = BodyToDoSchema;
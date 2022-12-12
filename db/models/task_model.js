const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    _listid: {
        type: mongoose.Types.ObjectId,
        required: true
    }
})

//Creating module for mongoose
const Task = mongoose.model('Task', TaskSchema);

module.exports = {Task}
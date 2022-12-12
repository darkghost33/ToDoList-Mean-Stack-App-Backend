//Will handle connection of my project to mongoDB 

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://127.0.0.1:27017/TaskManager', {useNewUrlParser: true }).then(() => {
    console.log('Connected to MongoDB !!!');
}).catch((e) => {
    console.log("Error while connecting to mongoDB!!!");
    console.log(e);
});


//To stop depreciation warnings from mongoDB
// mongoose.set('useCreateIndex', true);
// mongoose.set('useFindAndModify', false);

module.exports = {
    mongoose
};
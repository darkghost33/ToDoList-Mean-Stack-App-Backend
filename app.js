const express = require('express');
const { listen } = require('express/lib/application');
const req = require('express/lib/request');
const res = require('express/lib/response');
const app = express();
 

const {mongoose} = require('./db/mongoose');

const bodyParser = require('body-parser');

app.use(bodyParser.json());

//Loading mongoose modules ---
const {List, Task} = require('./db/models');

// Route Handles 

//LIST ROUTES

//GET /lists
//To get all lists
app.get('/lists', (req, res) => {
    //Return array of all the lists in the database
    List.find().then((lists) => {
        res.send(lists);
    }).catch((e) => {
        res.send(e);
    });
})


//POST /lists
//To create a list
app.post('/lists', (req, res) => {
    //New list created and return it to the user
    let title = req.body.title;

    let newList = new List({
        title
    });
    newList.save().then((listDoc) => {
        res.send(listDoc);
    })
});


//Path - /lists:id
//To update a specified list
app.patch('/lists/:id', (req, res) =>{
    //Update list
})


//Path - /lists/:id
//To delete a specific list 
app.delete('/lists/:id', (req, res) => {
    //Delete specific list
})



app.listen(3000, () => {
    console.log("Server is listening on port 3000");
})
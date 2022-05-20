const jsdom = require('jsdom');
const $ = require('jquery')//(new jsdom.JSDOM().window);
const express = require('express');
//const res = require('express/lib/response');
//const bodyParser = require('body-parser');
//const jsonParser = bodyParser.json();
const mongoose = require('mongoose');
const app = express();
//const router = express.Router();
app.set('View engine', 'ejs');
const path = require('path');
//const { request } = require('http');
const PORT = 3000;
const createPath = (page) => path.resolve(__dirname, 'ejs-View',`${page}.ejs`);
const db = 'mongodb+srv://GrimmMan:pas12345@cluster0.kjis4.mongodb.net/Test?retryWrites=true&w=majority';
mongoose
  .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
  .then((res) => console.log('Connect to DB'))
  .catch((error) => console.log(error));
//const BodyToDoSchema = require('../Models/bodyToDo');
app.listen(PORT,(error) => {
  error ? console.log(error) : console.log(`Listening port ${PORT}`);
});
  app.use("/ejs-View", express.static('./ejs-View'));
  const urlP = express.urlencoded({extended: false});
  
  app.get('/', (req,res) => {  
    const title = 'ToDoList'; 
    res.render(createPath('../view'));
  });

  app.post('/', urlP, (req,res) => {
    const {text} = req.body;
    const result = {
      text,
    };
    console.log(true);
    res.send(req.body);
  /*app.use((req, res, next) => {
    console.log('path: ${req.path}');
    console.log('method: ${req.method}');
    next();
  });*/ 
    /*const {text, date} = req.body;
    const result = new BodyToDoSchema({text, date});
    result
       .save()
       .then((result) => res.render(result))
       .catch((error) => {
         console.log(error);
         //res.render(createPath({title: 'Error'}));
       });*/
  });

  /*app.get('/', (req,res) => {
    BodyToDoSchema
       .find()
       .then((view) => res.render(createPath('/', {result1})))
       .catch((error) => {
        console.log(error);
        res.render(createPath('/'), ({title: 'Error'}));
      });
    res.render(createPath('../view'), {result1});
  });*/
 /*$(function() {
  $('.me').mouseover(function() {
    alert('22222')
   })
 });*/
 //app.use(express.static('./view'));
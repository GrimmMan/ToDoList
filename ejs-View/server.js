//const jsdom = require("jsdom");
//const $ = require("jquery"); //(new jsdom.JSDOM().window);
const express = require("express");
//const res = require('express/lib/response');
const bodyParser = require("body-parser");
//const jsonParser = bodyParser.json();
const mongoose = require("mongoose");
const app = express();
//const router = express.Router();
app.set("View engine", "ejs");
const path = require("path");
//const { request } = require('http');
const PORT = 3000;
const createPath = (page) => path.resolve(__dirname, "ejs-View", `${page}.ejs`);
const db =
  "mongodb+srv://GrimmMan:pas12345@cluster0.kjis4.mongodb.net/Test?retryWrites=true&w=majority";
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log("Connect to DB"))
  .catch((error) => console.log(error));
const BodyToDoSchema = require("/Users/anna/Documents/ToDoList/Models/bodyToDo");
app.listen(PORT, (error) => {
  error ? console.log(error) : console.log(`Listening port ${PORT}`);
});
app.use("/ejs-View", express.static("./ejs-View"));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

/*app.get('/', (req, res) => {
  const title = "ToDoList";
   const result1 = [{
     text: 'iii',
     date: 'xxx',
   }];
  // const result1 = [{
  //   text: 'text',
  //}];
  res.render(createPath("../index"), {result1});    
});*/

app.get('/', (req,res) => {
  const title = "ToDoList";
  BodyToDoSchema
  .find()
  .sort({createdAt: -1 })
  .then((result) => res.render(createPath('../index'), {result, title}))
  .catch((error) => {
   console.log(error);
 })
});

app.post("/", (req, res) => {
 const { text, date } = req.body;
 const result = new BodyToDoSchema({ text, date });
 console.log(result);
 console.log(req.body);
 result
    .save()
    .then(() => res.redirect('/'))
    .catch((error) => {
      console.log(error);
      //res.render(createPath(('../error'), {title: 'Error'}));
    });
});






/*  BodyToDoSchema
       .find()
       .then((result1) => res.send({result1}))
       .catch((error) => {
        console.log(error);
        //res.render(createPath('/'), ({title: 'Error'}));
      });


app.use((req, res, next) => {
    console.log('path: ${req.path}');
    console.log('method: ${req.method}');
    next();
  });*/
/*$(function() {
  $('.me').mouseover(function() {
    alert('22222')
   })
 });*/
//app.use(express.static('./view'));
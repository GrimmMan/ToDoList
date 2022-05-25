//const jsdom = require("jsdom");
//const $ = require("jquery"); //(new jsdom.JSDOM().window);
const express = require("express");
//const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
app.set("View engine", "ejs");
const path = require("path");
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
//app.use(bodyParser.json());

/*app.get('/:id', (req,res) => {
  const title = "ToDoList";
  const result = {
    id: '1',
    text: 'T',
    date: 'D',
  };
  res.render(createPath('../index'), {result, title})
});*/

app.post('/', (req, res) => {
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

app.get('/', (req,res) => {
  const title = "ToDoList";
  BodyToDoSchema
  .find()
  .then((result) => res.render(createPath('../index'), {result, title}))
  .catch((error) => {
   console.log(error);
 });
});

/*$(function() {
  $('.me').mouseover(function() {
    alert('22222')
   })
 });*/
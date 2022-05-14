const express = require('express');
//const res = require('express/lib/response');
const mongoose = require('mongoose');
const app = express();
app.set('View engine', 'ejs');
const path = require('path');
const PORT = 3000;
const createPath = (page) => path.resolve(__dirname, 'ejs-View',`${page}.ejs`);
const db = 'mongodb+srv://GrimmMan:pas12345@cluster0.kjis4.mongodb.net/Test?retryWrites=true&w=majority';
mongoose
  .connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
  .then((res) => console.log('Connect to DB'))
  .catch((error) => console.log(error));
  
 app.get('/', (req,res) => { 
  const title = 'ToDoList';
  res.render(createPath('view'));
 });
 
 app.view('/View/view', (req,res) => {
res.render(req.body);
})

 app.use(express.static('ejs-View', 'style'));
 app.listen(PORT,(error) => {
  error ? console.log(error) : console.log(`Listening port ${PORT}`);
})

 const express = require('express');
 const bodyParser = require('body-parser');
 const mustacheExpress = require('mustache-express');
 const app = express();
 const expressValidator = require('express-validator');
 const path = require('path');
 app.use(bodyParser.json());
 app.use(expressValidator());
 app.use(bodyParser.urlencoded({ extended: true }));
//  app.engine('mustache', mustacheExpress());
//  app.set('views', './views')
//  app.set('view engine', 'mustache')
//
// const list = [
//   {
//     todo: 'Wash the car',
//     yetTodo: true
//   }, {
//     todo: 'Do laundry',
//     yetTodo: false
//   }
// ];
//
// //setting the key and value for the render
// const data = {
//   todos: list
// };
//
// app.get('/', function(req, res){
//   res.render('todo', data);
// });
//
// app.post('/', function(req,res){
//   list.push({todo: req.body.inputfieldnameTBD, yetTodo: true});
// });
// app.post('/formActionNameTBD', function(req, res){
//   console.log(req.body.buttonName);
//   let theOneWeWant = req.body.complete;
//   function findTodo(item){
//     return item.todo === theOneWeWant;}
//   console.log(list.find(findTodo));
//   list.find(findTodo).yetTodo = false;
//   res.redirect('/');
// });



 app.get("/", function(req, res){
   var html = `
     <h1> To Do List </h1>
     <form action="/" method="post">
     <input type="text" name="todo" placeholder="Add a todo...">
     <button type="submit">Submit</button>
     </form>
   `;
   res.send(html);
 });
 app.post("/", function(req, res){
   var todo = req.body.todo;
   var html = `
   <h1> To Do List </h1>
   <form action="/" method="post">
   <input type="text" name="todo" placeholder="Add a todo...">
   <button type="submit">Submit</button>
   </form>
   <input type="checkbox">
   ${todo}
   `;
   res.send(html);
 });


 app.listen(3000, function(){
   console.log('Another successful start? Somebody call this man "Butter" cause he is on a ROLL!!');
 });

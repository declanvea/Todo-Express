
 const express = require('express');
 const bodyParser = require('body-parser');
 const mustacheExpress = require('mustache-express');
 const path = require('path');

 const app = express();

 app.use(express.static('public'));

 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));

 app.engine('mustache', mustacheExpress());
 app.set('views', './views')
 app.set('view engine', 'mustache')


let list = {
    data: [
    {todo: 'Go to the grocery', yetTodo: true},
    {todo: 'Do laundry', yetTodo: false},
    {todo: 'Pack lunch', yetTodo: true},
]
};

let info = list.data;

app.get('/', function(req, res) {
  res.render('todo', list);
});

app.post('/', function(req,res) {
  list.data.push({todo: req.body.task, yetTodo: true});
  res.render('todo', list);
});

app.post('/completed', function(req, res) {
  function findTodo(item){
    if (item.todo === req.body.completed){
        item.yetTodo = false;
    }
  }
  info.find(findTodo);
  res.redirect('/');
});

 app.listen(3000, () => console.log('Another successful start? Somebody call this man "Butter" cause he is on a ROLL!!'));

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleTimeString()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleTimeString()
  }
];

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: "Mini Messageboard", messages: messages })
});

/* GET new page. */ 
router.get('/new',(req, res)=>{
  res.render('form',{title:"Form"})
})

/* POST new page. */ 
router.post('/new',(req, res)=>{
  messages.push({text: req.body.message, user: req.body.author, added: new Date().toLocaleTimeString()});
  res.redirect('/')
})


module.exports = router;

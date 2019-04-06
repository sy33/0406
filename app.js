var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser());

app.use(express.static('public')); //

app.set('views', './views');
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.get
app.get('/', function(req,res,next){
    res.render('index',{}); // 
});

// app.get
// app.get('/2', function(req,res,next){
//     res.render('index2',{}); // 
// });

// app.get
// app.get('/3', function(req,res,next){
//     res.render('index3',{}); // 
// });




app.listen(3000);    
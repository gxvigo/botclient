var express = require('express');  
var path = require('path');  
var app = express();  
var router = express.Router();

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(router);  
app.use(express.static(path.join(__dirname, 'public')));


// Dev's botid:     

router.get('/', function(req, res) {
      res.render('index', {
        website: req.query.website,
        botid: req.query.botid
    });
  
  });


app.listen(port); 
console.log("Listening on port ", port); 
module.exports = app;
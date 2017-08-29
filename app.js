`use strict`;

var express = require('express');
var path = require('path');
require('dotenv').config({
  silent: true
});
var app = express();
var router = express.Router();

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(router);
app.use(express.static(path.join(__dirname, 'public')));


// Dev's botid:     

router.get('/', function (req, res) {
  //get parameters from Query Parameter and if not passed takes default
  // from .env file  
  var el = process.env.EL;
  var baseurl = process.env.BASE_URL;
  var xibmclientid = process.env.XIBMClientID;
  var xibmclientsecret = process.env.XIBMClientSecret;
  var botid = req.query.botid || process.env.BOT_ID;
  var website = req.query.website || process.env.WEBSITE;

    // console.log(`
    //     el ${el}
    //     baseurl ${baseurl}
    //     xibmclientid ${xibmclientid}
    //     xibmclientsecret ${xibmclientsecret}
    //     botid ${botid}
    //     website ${website}
    // `);

  res.render('index', {
    el: el,
    baseurl: baseurl,
    xibmclientid: xibmclientid,
    xibmclientsecret: xibmclientsecret,
    website: website,
    botid: botid
  });

});


app.listen(port);
console.log("Listening on port ", port);
module.exports = app;

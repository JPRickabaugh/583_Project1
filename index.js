// index.js - lines 4-18 and "WEB SERVER" section taken from glitch spotify project
// where your node app starts

/* Global ScrollMagic, Linear */

require('dotenv').config()

// init project
var express = require('express');
var app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
//app.get("/", function (request, response) {
  //response.send('Hello' + process.env.APIKEY);
//});
app.get('/', function(request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

//-------------------------------------------------------------//
//------------------------ MARVEL API -------------------------//
//-------------------------------------------------------------//

//below code is supposed to initialize marvel API and access api keys from the ENV file
//source for following 5 lines of code: https://www.npmjs.com/package/marvel-api
var api = require('marvel-api');
 
var marvel = api.createClient({
  publicKey: 'my-public-key', 
  privateKey: 'my-private-key'
});




//-------------------------------------------------------------//
//------------------------ WEB SERVER -------------------------//
//-------------------------------------------------------------//


// Listen for requests to our app
// We make these requests from client.js
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

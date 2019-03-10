// index.js - lines 4-21 and "WEB SERVER" section taken from glitch spotify project/office hours with you
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

//this is supposed to console log all the series that come up named Avengers. From there, my plan was to store the # of issues in each series in their own variables, or an array, and then push that to the chart. Unfortunately, I can't get the API to work in the first place due to the strange command line errors that show up whenever I run the app with node. Because of this, I've just manually found the info and plugged it into the chart in scripts.js for the time being - I want to figure out what's wrong with this eventually but I will likely need to come into office hours or collaborate with other classmates to do so.
marvel.series.findByTitle('Avengers')
  .then(function(res) {
    console.log('success', res.data); 
  })
  .fail(console.error)
  .done(); 


//-------------------------------------------------------------//
//------------------------ WEB SERVER -------------------------//
//-------------------------------------------------------------//


// Listen for requests to our app
// We make these requests from client.js
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

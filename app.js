var express = require('express');
var app = express();
var cors = require('cors');
var twit = require('twit');


var T = new Twit({
  consumer_key:         '...',
  consumer_secret:      '...',
  access_token:         '...',
  access_token_secret:  '...',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests. 
})

app.use(cors());

app.use(function(request, response, next){
	console.log(`${request.method} request for ${request.url}`);
	next();
});

app.use(express.static("./public"));

app.listen(3000);

console.log("Server running on port 3000");
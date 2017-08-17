var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var Twit = require('twit');
var config = require('./config');
var path = require('path');

var app = express();

var T = new Twit({
  consumer_key: 		config.TConsumerKey,
  consumer_secret:		config.TConsumerKeySecret,
  access_token: 		config.TAccessToken,
  access_token_secret:	config.TAccessTokenSecret,
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests. 
});


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



app.use(function(request, response, next){
	console.log(`${request.method} request for ${request.url}`);
	next();
});

app.use(express.static("./public"));
app.use('/scripts', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist'))); 



app.get("/users/search=:term", function(request, response){
	var term = request.params.term;
	var params = {q:term};
	T.get('users/search', params, function(error, users, twitterResponse){ //Name of the GET request
		if (!error) {
			response.json(users);
		}

	}); 
	

})


// app.get("/search=:term", function(request, response){
// 	var term = request.params.term;
// 	var params = {q:term};
// 	T.get('search/tweets', params, function(error, tweets, twitterResponse){ //Name of the GET request
// 		if (!error) {
// 			response.json(tweets);
// 		}

// 	});


// });

// app.get("/trends", function(request, response){
// 	var params = {id:23424916};
// 	T.get('trends/place', params, function(error, trends, twitterResponse){ //Name of the GET request
// 		if (!error) {
// 			response.json(trends);
// 		}

// 	}); 

// })


app.use(cors());

app.listen(3000);

console.log("Server running on port 3000");









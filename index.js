var port = 7777;

var getTransaction = function () {
    var time = process.hrtime();
    return time[0] + '' + time[1];
};

var bodyParser = require('body-parser');
var express    = require('express');
var app        = express();
var http       = require('http').Server(app);

app.use(bodyParser.json());

app.post('/', function (req, res) {
	// here arrives the webhook data
	console.log(JSON.stringify(req.body));
	res.end("ok");
});

http.listen(port, function(){
  console.log('listening on *:'+port);
});

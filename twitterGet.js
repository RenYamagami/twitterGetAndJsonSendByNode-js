var request = require('request');
var twit = require('twit');
var http = require('http');
var fs = require('fs');
var file = 'twitter.json';
var tweet= new twit({
  consumer_key: '9Qo0O9GkcIdYuhIdwL0Nnze4Z',
  consumer_secret: 'T0h4whocaTzz5RswI79NHNtVn2ByyH9uB2WwqvflmQQCaq3KrD',
  access_token: '474550122-qtlEqJDQ7xVxmvnJwGsxYt2Prjlud8Hh76XMucSy',
  access_token_secret: 'D0ZVuPMkI9rSTrZTTy1GonMDvwJiNeYtn1iwoHKxL8hsz'});

tweet.get('search/tweets', { q: 'chanren_bot since:2011-07-11', count: 100 }, function(err, data, response) {
  fs.writeFile(file, JSON.stringify(data), null, null);
  fs.readFile(file, 'utf8', function (err, tw) {
    console.log(JSON.stringify(tw));
  });
})

var server = http.createServer();
server.on('request', doRequest);
server.listen(1234);
console.log('Server running!');
 
// リクエストの処理
function doRequest(req, res) {
    fs.readFile('./twitter.json', 'UTF-8', 
        function(err, data) {
        	//res.header("Content-Type", "application/json; charset=utf-8");
            res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
            res.write(data);
            res.end();
        });
}


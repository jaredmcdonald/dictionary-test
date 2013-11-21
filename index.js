var http = require('http');

var api = {};

api.getWord = function(word) {

    var options = {
      host: 'www.dictionaryapi.com',
      port: 80,
      path: '/api/v1/references/collegiate/xml/' + word + '?key=62003798-387a-4ed6-a397-b4a6acb020e3'
    };

    http.get(options, function(res) {
      console.log("Got response: " + res.statusCode);

      res.on("data", function(chunk) {
        console.log("BODY: " + chunk);
      });
    }).on('error', function(e) {
      console.log("Got error: " + e.message);
    });

};

module.exports = api;
var http = require('http'),
  xml2js = require('xml2js');
  parser = new xml2js.Parser(),
  api = {};

// private function that passes json to callback function
var parseString = function(xml, callback, context){
  parser.parseString(xml.toString(), function(err, result) {
    if (err) console.log(err);
    callback.call(context, result);
  });
};

api.getWord = function(word, callback, context) {
  var cb = callback || function(){},
    ctx = context || this,
    options = {
      host: 'www.dictionaryapi.com',
      port: 80,
      path: '/api/v1/references/collegiate/xml/' + word + '{KEY HERE}'
    };
  http.get(options, function(res) {
    res.on('data', function(xml){
      parseString(xml, cb, ctx);
    });
  }).on('error', function(e) {
    console.log('error: ' + e.message);
  });
};

module.exports = api;
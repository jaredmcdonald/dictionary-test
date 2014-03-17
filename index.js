var http = require('http'),
  request = require('request'),
  xml2js = require('xml2js'),
  parser = new xml2js.Parser(),
  api = {},
  key = null;

// private function that passes json to callback function
var parseString = function(xml, callback, context){
  parser.parseString(xml.toString(), function(err, result) {
    if (err) console.log(err);
    callback.call(context, result);
  });
};

// need to do this in setup to configure your API key
api.configure = function(k) {
  key = k;
};

api.getWord = function(word, callback, context) {
  if (!key) console.error('Need to set up dictionary API key with .configure()');
  var cb = callback || function(){},
    ctx = context || this,
    url = ['http://www.dictionaryapi.com/api/v1/references/collegiate/xml/', word, '?key=', key].join('');

  request.get(url, function(error, response, body){
    if (error) console.error(error);
    parseString(body, cb, ctx);
  });
};

module.exports = api;
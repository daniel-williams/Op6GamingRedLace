var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;
var app = express();

app.use(require('connect-livereload')());
app.use('/content', express.static('client/content'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded


app.post('/api/*', function response(req, res) {
  console.log('url: ', req.url, ', json: ', req.body);
  res.status(200).end();
});

app.get('*', function response(req, res) {
  res.sendFile(path.resolve(__dirname + '/../client/index.html'));
});


app.listen(port, '127.0.0.1', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://127.0.0.1:%s/ in your browser.', port, port);
});

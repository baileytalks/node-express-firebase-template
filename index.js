const express = require('express');
const expressMd = require('express-md');
const app = express();
const port = 3000;

// create an instance of express-md with custom options
var mdRouter = expressMd({

  // serve markdown files from `docs` directory
  dir: __dirname + '/public',

  // serve requests from root of the site
  url: '/',

  headers: {
    'Content-Type': 'text/html; charset=utf-8'
  }

  // variables to replace {{{ varName }}} in markdown files
  // vars: {
  //   message: 'Hello World!'
  // }
});

// add as express middleware
app.use(mdRouter);

app.get('*', function(req, res){
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, function () {
  console.log(expressMd.version + ' listening on port ' + port);
});

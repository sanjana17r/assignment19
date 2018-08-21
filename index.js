
var express = require('express');
var app = express();
app.get('/admin', function (req, res)
{
 console.log('admin page');
})
module.exports = app;

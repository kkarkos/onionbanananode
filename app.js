var express = require('express');
var keypress = require('keypress');

var app = express();

 // make `process.stdin` begin emitting "keypress" events 
keypress(process.stdin);
 
// listen for the "keypress" event 
process.stdin.on('keypress', function (ch, key) {
  console.log('got "keypress"', key);
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }
});
 
process.stdin.setRawMode(true);
process.stdin.resume();

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


module.exports = app;

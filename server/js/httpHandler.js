const fs = require('fs');
const path = require('path');
const headers = require('./cors');
const multipart = require('./multipartUtils');
const keypressHandler = require('./js/keypressHandler');
const messageQueue = require('./messageQueue');


// Path for the background image ///////////////////////
module.exports.backgroundImageFile = path.join('.', 'background.jpg');
////////////////////////////////////////////////////////

let messageQueue = null;
module.exports.initialize = (queue) => {
  messageQueue = queue;
};

module.exports.router = (req, res, next = ()=>{}) => {
  console.log('Serving request type ' + req.method + ' for url ' + req.url);
  // console.log(res)
  res.writeHead(200, headers);
  //take array from message, dequeue everytime a get request come in to display. then send the string over to GET
  // res.end(dequeue())
  res.end();

  next(); // invoke next() at the end of a request to help with testing!
};


// if (req.method === 'GET') {
//   var options = ['up', 'down', 'left', 'right'];
//   var movement = options[Math.floor(Math.random() * 4) + 0];
//   res.end(movement);
// }

// keypressHandler.initialize(message => console.log(`Message received: ${message}`));
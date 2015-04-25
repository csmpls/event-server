restify = require('restify');

port = 14191 
 
var server = restify.createServer({});
server.use(restify.bodyParser())

server.post('/', function (req, res, next) {
  console.log(req.body);
  res.end(200)
  return next();
});
 
server.listen(port)
console.log('listening on port ' + port)


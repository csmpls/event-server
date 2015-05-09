var restify = require('restify');
var database = require('./database.js')

port = 14191 
 
var server = restify.createServer({});
server.use(restify.bodyParser())

// allow CORS
server.use(
  function crossOrigin(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    return next();
  }
)

// setup db
database.syncEventModel()

server.post('/', function (req, res, next) {
  database.saveEvent(req.body)
  res.end(200)
  return next();
});
 
server.listen(port)
console.log('listening on port ' + port)


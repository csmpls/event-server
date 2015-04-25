var Sequelize = require('sequelize')
var db_config = require('./db_config.js')

// sequelize is our db
var sequelize = db_config()


// events come in with the form
// {
//  eventName                 // string
//  time                 // string that can be converted to a postgres date type


// sequel model 
var Event = sequelize.define('Event', {
  eventName: Sequelize.STRING
  , time: Sequelize.DATE
})

// syncs model with the db
function syncEventModel() { 
  Event.sync()
}

// fn to save a reading from a json post
function saveEvent(jsonPost) {

  Event.create({
  	// this needs to match the data that comes from the server
    eventName: jsonPost.eventName
    , time: jsonPost.time
  // }).success(function() {
  //   console.log(reading.id + ' saved');
  }).error(function(err) {
    console.log(err)
  })
}

exports.syncEventModel = syncEventModel
exports.saveEvent = saveEvent

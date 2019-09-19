'use strict';
var simpleFormDynamoService = require("../services/simpleFormDynamoService.js");
var stateInvokeService = require("../services/stateInvokeService");

module.exports.simpleFormSubmit = (event, context, callback) => {
  var item = {
          Id: event.id,
          FirstName: event.firstName,
          LastName: event.lastName,
          Email: event.email,
          State: event.states,
      }
  if(event.states == 'NSW') stateInvokeService.handleInvokeState(event.states, callback);
  simpleFormDynamoService.insertIntoDB(item, callback); 
};

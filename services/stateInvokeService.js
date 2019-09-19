const AWS = require('aws-sdk');
const lambda = new AWS.Lambda({region: 'ap-southeast-2'});

var handleInvokeState = (states, callback) => {
    const invokeParams = {
      FunctionName: "simple-form-serverless-dev-stateInvokeService",
      InvocationType: "RequestResponse",
      Payload: JSON.stringify(states)
    };
    console.log("Invoking lambda function ...");
    lambda.invoke(invokeParams, function(err, data) {
      if (err) {
        callback(err, null);
      } else if (data) {
        data = {
            response: data.Payload
        }
        console.log(data.response);
        callback(null, data.response);
      }
    });
};

module.exports = {
    handleInvokeState: handleInvokeState
};
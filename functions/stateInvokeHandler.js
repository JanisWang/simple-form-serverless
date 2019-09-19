module.exports.stateInvokeHandler = (event, context, callback) => {  
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: event
      })
    };
    callback(null, response);
  };
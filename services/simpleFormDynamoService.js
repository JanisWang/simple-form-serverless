const AWS = require('aws-sdk');
const dynamoDBClient = new AWS.DynamoDB.DocumentClient({region: "ap-southeast-2"});

var insertIntoDB = (item, callback) => {
    const params = {
        TableName: "SimpleFormTable",
        Item: item
    };
    const response = {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
        },
        body: "Insert successfully."
    };
    
    dynamoDBClient.put(params, (err, data) => {
      if(err){
            callback(err, null);
        } else {
            data = {
                response: response,
            }
            callback(null, data);
        }
    });
}

module.exports = {
    insertIntoDB: insertIntoDB,
};
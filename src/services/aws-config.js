const AWS = require('aws-sdk');

AWS.config.update({
    region: 'eu-north-1',
    accessKeyId: 'AKIAU7QB6BQOTKSQZ2NJ',
    secretAccessKey: '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',
});

const dynamodb = new AWS.DynamoDB.DocumentClient();

module.exports = dynamodb;

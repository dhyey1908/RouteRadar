import React, { useState, useEffect } from 'react';

const AWS = require('aws-sdk');

AWS.config.update({
    region: 'eu-north-1',
    accessKeyId: 'AKIAU7QB6BQOTKSQZ2NJ',
    secretAccessKey: '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',
});

const dynamodb = new AWS.DynamoDB.DocumentClient();

// module.exports = dynamodb;

// AWS.config.update(awsConfig);

// const dynamoDB = new AWS.DynamoDB.DocumentClient();
const id = localStorage.getItem('userId')

function Test() {
    console.log("=======");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const params = {
      TableName: 'user', 
      KeyConditionExpression: 'userId = :partitionKey',
      ExpressionAttributeValues: {
        ':partitionKey': id,
      },
    };

    dynamodb.query(params, (error, data) => {
      if (error) {
        console.error('Error querying DynamoDB:', error);
      } else {
        setItems(data.Items);
        console.log("data",data.Items);
      }
    });
  }, []);

  return (
    <div>
      <h1>DynamoDB Query Example</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <p>Name: {item.name}</p>
            <p>Description: {item.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Test;

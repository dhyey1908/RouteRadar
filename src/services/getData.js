import dynamodb from './aws-config';
import { useSelector } from 'react-redux';


const fetchData = async (tableName) => {
  try {
    const params = {
      TableName: tableName,
    };

    const result = await dynamodb.scan(params).promise();
    console.log("---------------",result);
    return result.Items || [];
  } catch (error) {
    console.error('Error fetching items:', error);
    throw error;
  }
};


// const params = {
//   TableName: tableName, 
//   KeyConditionExpression: 'userId = :partitionKey',
//   ExpressionAttributeValues: {
//     ':partitionKey': id,
//   },
// };

// dynamodb.query(params, (error, data) => {
//   if (error) {
//     console.error('Error querying DynamoDB:', error);
//   } else {
//     setItems(data.Items);
//     console.log("data",data.Items);
//   }
// });

// }

// const fetchData = async (tableName) => {
//   try {
//     const ID = useSelector((state) => state.auth);
//     const userId = ID.auth.user.userId;
//     const params = {
//       TableName: tableName,
//       KeyConditionExpression: "userId = :id",
//       ExpressionAttributeValues: {
//         ":id": userId,
//       },
//     };

//     const result = await dynamodb.query(params).promise();
//     console.log("resylt from ====", result.Items);
//     return result.Items || [];
//   } catch (error) {
//     console.error('Error querying items:', error);
//     throw error;
//   }
// };


export { fetchData };
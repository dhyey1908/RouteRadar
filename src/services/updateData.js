import dynamodb from './aws-config';

const updateData = async (tableName, userId, newData) => {
    try {
      const params = {
        TableName: tableName,
        Item: {
          userId: userId, 
          name: newData.name,
          email: newData.email,
          gender: newData.gender,
          phone: newData.phone,
        },
      };
  
      await dynamodb.put(params).promise();
      return newData; 
    } catch (error) {
      console.error('Error updating item:', error);
      throw error;
    }
  };
  
  

export { updateData };

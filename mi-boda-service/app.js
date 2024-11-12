const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");

const isLocal = process.env.AWS_SAM_LOCAL === "true";

const dynamoDBConfig = {
  region: "eu-central-1",
  ...(isLocal && {
    endpoint: "http://dynamodb-local:8000",
  }),
};

const dynamoDB = new AWS.DynamoDB.DocumentClient(dynamoDBConfig);

exports.submitForm = async (event) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS,POST",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Allow-Credentials": "true",
  };

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers,
      body: "",
    };
  }

  try {
    const data = JSON.parse(event.body);
    console.log("Received data:", data);

    const item = {
      ...data,
      id: uuidv4(),
      createdAt: new Date().toISOString(),
    };

    console.log("Item to save:", item);

    await dynamoDB
      .put({
        TableName: "FormData",
        Item: item,
      })
      .promise();

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ message: "Data saved successfully!" }),
    };
  } catch (error) {
    console.error("Full error:", error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        message: "Internal Server Error",
        details: error.message,
      }),
    };
  }
};

const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");
const nodemailer = require("nodemailer");
const ConfirmationEmail = require("./emails/confirmation.js");

if (process.env.AWS_SAM_LOCAL === "true") {
  try {
    require("dotenv").config();
  } catch (error) {
    console.warn("dotenv not found, skipping...");
  }
}

const isLocal = process.env.AWS_SAM_LOCAL === "true";

const dynamoDBConfig = {
  region: "eu-central-1",
  ...(isLocal && {
    endpoint: "http://dynamodb-local:8000",
    //endpoint: "http://localhost:8000",
    sslEnabled: false,
  }),
};

const dynamoDB = new AWS.DynamoDB.DocumentClient(dynamoDBConfig);

// Add these environment variables to your Lambda function
const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = process.env.SMTP_PORT;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;

const transporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: true,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

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

    // If email is provided, send confirmation
    if (data.email && data.asistencia === "si") {
      const emailHtml = ConfirmationEmail({ name: data.name });
      console.log("Email template generated");

      try {
        await transporter.sendMail({
          from: {
            name: "Boda de Jonatan y Rosa",
            address: "ismaelbakkalichairi@gmail.com",
          },
          to: data.email,
          subject: "¡Gracias por confirmar tu asistencia!",
          html: emailHtml,
          text: `¡Gracias por confirmar tu asistencia, ${data.name}! Nos hace mucha ilusión que nos acompañes en este día tan especial.`,
        });
      } catch (emailError) {
        console.error("Error sending email:", emailError);
      }
    }

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

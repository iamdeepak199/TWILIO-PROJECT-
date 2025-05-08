require('dotenv').config();
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.ACCOUNT_TOKEN;
const client = require('twilio')(accountSid, authToken);
const chalk = require('chalk');

client.messages
    .create({
        body: 'Hi this demo of sending text message : using node and twilio module',
        from: process.env.MY_TWILIO_PHONE_NUMBER,
        to: '+919643762201'
    })
    .then(message => console.log(chalk.black.italic.bgBlue('Message is sent on this SID Number' + message.sid)))


    .catch(error => console.error('Error sending SMS:', error)); 

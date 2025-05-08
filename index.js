require('dotenv').config();
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.ACCOUNT_TOKEN;
const client = require('twilio')(accountSid, authToken);
const chalk = require('chalk');

//THIS FUNCTION IS USE FOR SEND TEXT MESSAGE :
/*client.messages
    .create({
        body: 'Hi this demo of sending text message : using node and twilio module',
        from: process.env.MY_TWILIO_PHONE_NUMBER,
        to: process.env.PHONE_NUMBER
    })
    .then(message => console.log(chalk.black.italic.bgBlue('Message is sent on this SID Number' + message.sid)))


    .catch(error => console.error('Error sending SMS:', error)); 
*/

//THIS FUNCTION IS USE FOR SEND AUDIO MESSAGE :
async function createCall() {
  const call = await client.calls.create({
    from: process.env.MY_TWILIO_PHONE_NUMBER,
    method: "GET",
    to: process.env.PHONE_NUMBER,
    url: "http://demo.twilio.com/docs/voice.xml",
  });

  console.log(chalk.black.italic.bgBlue('Message is sent on this SID Number' + call.sid));
}

createCall();
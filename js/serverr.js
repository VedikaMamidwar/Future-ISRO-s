// server.js
const express = require('express');
const bodyParser = require('body-parser');
const twilio = require('twilio');

// Twilio credentials from your Twilio account
const accountSid = 'your_account_sid';
const authToken = 'your_auth_token';
const twilioNumber = 'your_twilio_phone_number';

// Initialize Twilio client
const client = new twilio(accountSid, authToken);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// POST route to handle form submission
app.post('/submit_contact', (req, res) => {
    const { name, email, message } = req.body;

    // Send SMS notification
    client.messages.create({
        body: `New contact form submission:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`,
        from: twilioNumber,
        to: 'your_mobile_number' // Replace with your phone number
    })
    .then((message) => {
        console.log('SMS sent successfully:', message.sid);
        res.send('SMS sent successfully');
    })
    .catch((error) => {
        console.error('Error sending SMS:', error);
        res.status(500).send('Failed to send SMS');
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

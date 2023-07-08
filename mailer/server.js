const express = require('express');
const sendMail = require('./sendMail');

const app = express();
app.use(express.json());

// Route
app.get('/sendMail', async (req, res) => {
  try {
    await sendMail(); // Call the sendMail function
    res.send('Hey, Nodemailer is running successfully!');
  } catch (error) {
    console.log(error);
    res.status(500).send('An error occurred while sending the email.');
  }
});

app.listen(4001, () => {
  console.log('Server is running on port 4001');
});

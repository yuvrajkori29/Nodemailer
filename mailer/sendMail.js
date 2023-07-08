const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  // Connect with SMTP server
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    auth: {
      user: 'your mail', // Replace with your Gmail email address
      pass: 'your -pass' // Replace with your Gmail password or an app password
    },
  });

  const mailOptions = {
    from: 'mail id', // Sender address
    to: 'mail id', // List of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // Plain text body
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Message sent: %s', info.response);
    }
  });
};

module.exports = sendMail;

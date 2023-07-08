const nodemailer = require('nodemailer');
const { SMTP_SERVICE, SMTP_USER, SMTP_PASS } = require('../config');

const transporter = nodemailer.createTransport({
  service: SMTP_SERVICE,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});

async function sendEmail({ emailList, emailSubject, message }) {
  const info = await transporter.sendMail({
    from: SMTP_USER,
    to: emailList,
    subject: emailSubject,
    html: message,
  });
  return info;
}

module.exports = sendEmail;

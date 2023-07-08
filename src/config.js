if (process.env.NODE_ENV === 'development') {
  require('dotenv').config();
}

const PORT = process.env.PORT;

const SMTP_SERVICE = process.env.SMTP_SERVICE;
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;

module.exports = {
  PORT,
  SMTP_SERVICE,
  SMTP_USER,
  SMTP_PASS,
};

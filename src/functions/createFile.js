const fs = require('fs/promises');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

async function createFile({ info, emailSubject, message }) {
  try {
    const filePath = path.join(
      __dirname,
      '..',
      '..',
      'sended_emails',
      `${uuidv4()}.json`
    );

    const data = {
      accepted: info.accepted,
      rejected: info.rejected,
      from: info.envelope.from,
      to: info.envelope.to,
      messageId: info.messageId,
      subject: emailSubject,
      message,
    };

    await fs.writeFile(filePath, JSON.stringify(data));
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

module.exports = createFile;

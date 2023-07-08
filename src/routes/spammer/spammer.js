const { Router } = require('express');
const sendEmail = require('../../functions/sendEmail');
const createFile = require('../../functions/createFile');
const createMessage = require('../../functions/createMessage');

const router = Router();

router.post('/', async (req, res) => {
  const serverResponse = {
    data: null,
    error: null,
  };

  try {
    const { emails, subject, messageHeader } = req.body;

    const message = await createMessage(messageHeader);

    const info = await sendEmail({
      emails,
      subject,
      message,
    });

    const isFileSaved = await createFile({
      info,
      subject,
      message,
    });

    if (isFileSaved) console.log('archivo guardado exitosamente');

    serverResponse.data = {
      accepted: info.accepted,
      rejected: info.rejected,
      fileSaved: isFileSaved,
    };
  } catch (error) {
    console.log('ERROR', error);
    serverResponse.error = error.message;
  }

  res.send(serverResponse);
});

module.exports = router;

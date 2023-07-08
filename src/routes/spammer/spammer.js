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
    const { emailList, emailSubject, emailMessage } = req.body;

    const message = await createMessage(emailMessage);

    const info = await sendEmail({
      emailList,
      emailSubject,
      message,
    });

    const isFileSaved = await createFile({
      info,
      emailSubject,
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

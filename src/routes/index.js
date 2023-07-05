const { Router } = require('express');
const spammer = require('./spammer/spammer');

const router = Router();

router.use('/spammer', spammer);

module.exports = router;

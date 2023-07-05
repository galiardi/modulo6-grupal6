const { Router } = require('express');

const router = Router();

router.post('/', (req, res) => {
  res.send({ hello: 'world' });
});

module.exports = router;

const router = require('express').Router();
const authRoute = require('./authRoute');
const urlRoute = require('./urlRoute');
const fileRoute = require('./fileRoute');

router.use('/auth', authRoute);
router.use('/url', urlRoute);
router.use('/file', fileRoute);

module.exports = router;

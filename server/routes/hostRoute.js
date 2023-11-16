const router = require('express').Router();
const {} = require('../controllers/hostController');

router.route('/').get().post();

module.exports = router;

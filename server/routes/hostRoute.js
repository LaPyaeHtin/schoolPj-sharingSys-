const router = require('express').Router();
const {} = require('../controllers/hostController');
const { verifyJWT } = require('../middlewares/verifyJWT');
const { createHost } = require('../controllers/hostController');

router.use(verifyJWT);
router.route('/').post(createHost);

module.exports = router;

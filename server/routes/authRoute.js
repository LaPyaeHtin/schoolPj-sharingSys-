const router = require('express').Router();
const { protect } = require('../middlewares/protectRoute');
const {
  register,
  login,
  logout,
  forgotPassword,
  resetPassword,
  changePassword,
  logoutAllDevices,
} = require('../controllers/authController');

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/logout').get(protect, logout);
router.route('/forgotpassword').post(forgotPassword);
router.route('/resetpassword/:resetToken').patch(resetPassword);
router.route('/changepassword').patch(protect, changePassword);
router.route('/logoutalldevices').get(protect, logoutAllDevices);
module.exports = router;

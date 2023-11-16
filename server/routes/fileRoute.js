const router = require('express').Router();
const { multiUpload, singleUpload } = require('../middlewares/uploadFile');
const {
  uploadFile,
  getAllFiles,
  updateFile,
  deleteFile,
} = require('../controllers/fileController');

router.route('/upload').post(multiUpload, uploadFile);
router.route('/').get(getAllFiles);
router.route('/:shortId').patch(updateFile).delete(deleteFile);

module.exports = router;

const File = require('../models/FileModel');
const customError = require('../utils/CustomError');
const asyncErrorHandler = require('../utils/asyncErrorHandler');
const generateRandomString = require('../helper/generateRandomString');

// Upload File @ POST /file/upload
exports.uploadFile = asyncErrorHandler(async (req, res, next) => {
  const user_id = req.user?._id || undefined;
  const originalFilenames = req.files.map((file) => file.originalname);
  const filenames = req.files.map((file) => file.filename);

  const files = originalFilenames.map((originalFilename, index) => ({
    shortId: generateRandomString(),
    originalFilename,
    filename: filenames[index],
    user_id,
  }));
  // Save files to the database
  await File.insertMany(files);

  res.status(200).json({ message: 'Files uploaded successfully.' });
});

// Get All Files @ GET /file
exports.getAllFiles = asyncErrorHandler(async (req, res, next) => {
  if (!req.user) {
    const err = new customError(
      'only login user can see the uploaded file',
      400
    );
    return next(err);
  }
  const files = await File.find({ user_id: req.user?._id });

  res.status(200).json({
    status: 'success',
    data: files,
  });
});

//update file @ BATCH /file/:id
exports.updateFile = asyncErrorHandler(async (req, res, next) => {
  // req.user = user; //for testing
  const { shortId } = req.params;
  const {
    filename = undefined,
    customLink = undefined,
    password = undefined,
    isActive = undefined,
  } = req.body;
  const file = await Url.findOne({ shortId });
  if (!file) {
    const err = new customError('File not found', 404);
    return next(err);
  }

  if (req.user?._id !== file.user_id.toString()) {
    const err = new customError('You can update only your own url', 400);
    return next(err);
  }

  // Build an object with the properties that are present in req.body
  const updateFields = {};
  if (filename) updateFields.url = url;

  if (customLink || password) {
    if (!req.user?.isPremium) {
      const err = new customError(
        'this feature is only available for premium users',
        400
      );
      return next(err);
    }
    if (customLink) updateFields.customLink = customLink;
    if (password) updateFields.password = password;
  }

  if (isActive) updateFields.isActive = isActive;

  // Use findOneAndUpdate to update the document
  const updatedFile = await Url.findOneAndUpdate(
    { shortId },
    { $set: updateFields },
    { new: true } // To return the updated document
  );

  // Check if the URL was found and updated
  if (!updatedUrl) {
    const err = new customError('URL not found', 404);
    return next(err);
  }

  // Send the updated URL as the response
  res.status(200).json({
    status: 'success',
    message: 'File deleted successfully',
    updatedFile,
  });
});

//delete file @ DELETE /file/:id
exports.deleteFile = asyncErrorHandler(async (req, res, next) => {
  const { shortId } = req.params;
  // req.user = user; //for testing
  const file = await File.findOne({ shortUrl });
  if (req.user._id !== file.user_id.toString()) {
    const err = new customError('You can delete only your own file', 400);
    return next(err);
  }
  // const url = await Url.findByIdAndDelete(id);
  if (!file) {
    const err = new customError('File not found', 404);
    return next(err);
  }

  try {
    await fs.unlink(
      path.join(
        __dirname,
        'uploads',
        'files',
        req.user.filePath,
        file.originalFilename
      )
    );
  } catch (error) {
    console.error('Error deleting file:', error);
    const err = new customError(
      'An error occurred while deleting the file',
      500
    );
    return next(err);
  }
  await File.deleteOne({ shortId });
  res.status(200).json({
    status: 'success',
    message: 'File deleted successfully',
    data: file,
  });
});

//download file @ GET /file/:id
exports.sendDownloadFile = asyncErrorHandler(async (req, res, next) => {});

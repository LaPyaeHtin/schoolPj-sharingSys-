const File = require('../models/FileModel.js');
const CustomError = require('../utils/CustomError.js');
const asyncErrorHandler = require('../utils/asyncErrorHandler.js');
const generateRandomString = require('./../helper/generateRandomString.js');
const path = require('path');

// Upload File @ POST /file/upload
exports.uploadFile = asyncErrorHandler(async (req, res, next) => {
  const { customLink, password, limit, customFileName } = req.body;
  const user_id = req.user?._id || undefined;
  const originalFilename = customFileName
    ? `${customFileName}${path.extname(req.file?.originalname)}`
    : req.file?.originalname;
  const filename = req.file?.filename;
  const fileSize = req.file?.size || 0;

  if (customLink || password || limit) {
    if (!req.user?.isPremium) {
      const err = new CustomError(
        'these feactures are only available for premium users',
        400
      );
      return next(err);
    }
    if (customLink) {
      //chech length of customLink
      if (customLink.length < 3) {
        const err = new CustomError(
          'Custom link must be atleast 3 characters',
          400
        );
        return next(err);
      }
      //check if customLink already exist?
      const isExist = await File.findOne({ shortId: customLink });
      if (isExist) {
        const err = new CustomError('link already exist!', 400);
        return next(err);
      }
    }
    //check password contain or not and length
    if (password) {
      if (password.length < 3) {
        const err = new CustomError(
          'Password must be atleast 3 characters',
          400
        );
        return next(err);
      }
    }
  }

  const file = {
    shortId: customLink || generateRandomString(),
    originalFilename,
    filename,
    user_id,
    fileSize,
    password: password || undefined,
    limit: limit || undefined,
  };
  // Save file to the database
  await File.create(file);
  res.status(200).json({ message: 'File uploaded successfully.' });
});

// Get All Files @ GET /file
exports.getAllFiles = asyncErrorHandler(async (req, res, next) => {
  if (!req.user) {
    const err = new CustomError(
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
    const err = new CustomError('File not found', 404);
    return next(err);
  }

  if (req.user?._id !== file.user_id.toString()) {
    const err = new CustomError('You can update only your own url', 400);
    return next(err);
  }

  // Build an object with the properties that are present in req.body
  const updateFields = {};
  if (filename) updateFields.url = url;

  if (customLink || password) {
    if (!req.user?.isPremium) {
      const err = new CustomError(
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
    const err = new CustomError('URL not found', 404);
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
    const err = new CustomError('You can delete only your own file', 400);
    return next(err);
  }
  // const url = await Url.findByIdAndDelete(id);
  if (!file) {
    const err = new CustomError('File not found', 404);
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
    const err = new CustomError(
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

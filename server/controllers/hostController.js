const Host = require('../models/hostModel.js');
const User = require('../models/userModel.js');
const asyncErrorHandler = require('../utils/asyncErrorHandler.js');
const CustomError = require('../utils/CustomError.js');
const generateRandomString = require('../helper/generateRandomString.js');
const { multiUpload, singleUpload } = require('../middlewares/uploadFile.js');

exports.createHost = asyncErrorHandler(async (req, res, next) => {
  console.log(req.body);
  const { customDomain, password, description, comment = true } = req.body;
  if (customDomain || password || !comment) {
    if (req?.user?.isPremium) {
      const err = new CustomError(
        'these feactures are only available for premium users',
        400
      );
      return next(err);
    }
    if (customDomain) {
      //chech length of customLink
      if (customDomain.length < 3) {
        const err = new CustomError(
          'Custom domain must be atleast 3 characters',
          400
        );
        return next(err);
      }
      //check if customLink already exist?
      const isExist = await Host.findOne({ domain: customDomain });
      // console.log(isExist?._id.toString());
      if (isExist) {
        const err = new CustomError('Domain already exist!', 400);
        return next(err);
      }
    }
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

  const domain = customDomain || generateRandomString();
  console.log(domain);

  multiUpload('host', domain, true)(req, res, async (err) => {
    if (err) {
      return next(err);
    }
  });
  // console.log(req.files);
  const totalFileSizes =
    req?.files?.reduce((acc, file) => {
      return acc + file.size;
    }, 0) || 0;
  // const host = await Host.create({
  //   creator: req.user?._id,
  //   domain,
  //   password,
  //   description,
  //   hostingType: req.user?.isPremium ? 'premium' : 'free',
  //   totalFileSizes,
  // });
  return res.status(201).json({
    success: true,
    message: 'bla bla',
    // data: host,
  });
}); // END: ed8c6549bwf9

// exports.createHost = asyncErrorHandler(async (req, res, next) => {});

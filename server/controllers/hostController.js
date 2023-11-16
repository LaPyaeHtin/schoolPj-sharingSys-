const Host = require('../models/hostModel.js');
const User = require('../models/userModel.js');
const asyncErrorHandler = require('../utils/asyncErrorHandler.js');
const CustomError = require('../utils/CustomError.js');

exports.createHost = asyncErrorHandler(async (req, res, next) => {
  const { customDomain, description, indexFile } = req.body;
});

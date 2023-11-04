const mongoose = require('mongoose');

const FileSchema = new mongoose.Schema({
  shortId: {
    type: String,
    unique: [true, 'Something went wrong! try again'],
  },
  customLink: {
    type: String,
    trim: true,
    unique: [true, 'url is already used!'],
  },
  filename: {
    type: String,
  },
  originalFilename: {
    type: String,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    default: undefined,
  },
  fileSize: {
    type: Number,
    default: 0,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model('File', FileSchema);

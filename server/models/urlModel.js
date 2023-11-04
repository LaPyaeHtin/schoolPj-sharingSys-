const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      default: undefined,
    },
    url: {
      type: String,
      required: true,
      trim: true,
    },
    customLink: {
      type: String,
      trim: true,
      // unique: [true, 'url is already used!'],
      default: undefined,
    },
    shortUrl: {
      type: String,
      required: true,
      unique: [true, 'Something went wrong! try again'],
      trim: true,
      lowercase: true,
    },
    clickCount: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    password: {
      type: String,
      minlength: 3,
      trim: true,
    },
    limit: {
      type: Number,
      default: 1000,
    },
  },
  { timestamps: true }
);

const Url = mongoose.model('Url', urlSchema);

module.exports = Url;

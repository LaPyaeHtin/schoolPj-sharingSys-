const mongoose = require('mongoose');

const HostingSchema = new mongoose.Schema(
  {
    // web hosting lote yin coin a little pay ya mal hehe, arr drr mha player tway ka yaw support tip pay mhar
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    domain: {
      type: String,
      required: true,
      trim: true,
      unique: [true, 'Domain is already used!'],
    },
    customDomain: {
      type: String,
      trim: true,
      unique: [true, 'Custom domain is already used!'],
    },
    description: {
      type: String,
    },
    hostingType: {
      type: String,
      enum: ['free', 'premium'],
      default: 'free',
    },
    path: {
      type: String,
      required: true,
      trim: true,
      unique: [true, 'something went wrong! try again'],
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    receievedCoin: {
      type: Number,
      default: 0,
    },
    comments: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
      default: undefined,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Hosting', HostingSchema);

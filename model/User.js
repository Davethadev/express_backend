const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide name"],
      maxlength: 50,
      minlength: 3,
    },
    email: {
      type: String,
      required: [true, "Please provide email"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please provide password"],
      minlength: 6,
    },
    slug: String,
    phone_verified: Boolean,
    document_verified: Boolean,
    balance: Number,
    blocked_at: Date,
    status: String,
    package: { type: Object },
    referral_code: {
      type: String,
    },
    referred_by: {
      type: String,
    },
    roles: {
      User: {
        type: Number,
        default: 2001,
      },
      Admin: Number,
    },
    // created_at: {
    //   type: Date,
    //   default: Date.now,
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);

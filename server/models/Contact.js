import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    status: {
    type: String,
    enum: ["New", "In Progress", "Completed"],
    default: "New",
},
    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    service: {
      type: String,
      required: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },

    status: {
      type: String,
      enum: ["New", "In Progress", "Completed"],
      default: "New",
    },
  },
  {
    timestamps: true,
  }
);

const Contact = mongoose.model("Contact", contactSchema);

export default Contact;
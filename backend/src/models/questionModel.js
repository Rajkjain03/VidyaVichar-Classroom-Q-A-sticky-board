import mongoose from "mongoose";

const questionSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
      default: "Anonymous",
    },
    status: {
      type: String,
      required: true,
      enum: ["unanswered", "answered", "important"],
      default: "unanswered",
    },
  },
  {
    timestamps: true,
  }
);

const Question = mongoose.model("Question", questionSchema);
export default Question;

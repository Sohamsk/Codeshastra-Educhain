import mongoose from "mongoose";
const { Schema, model } = mongoose;

const courseSchema = Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  author_address: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  students: [String],
  files: {},
});

const Course = mongoose.models.Course || model("Course", courseSchema);
export default Course;

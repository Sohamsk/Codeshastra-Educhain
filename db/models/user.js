import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = Schema({
  address: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  created: [Number],
  enrolled: [Number]
});

const User =
  mongoose.models.User || model("User", userSchema);
export default User;

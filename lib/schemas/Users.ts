import { model } from "mongoose";
import { Schema, models } from "mongoose";

const usersSchema = new Schema({
  email: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export default models.Users || model("Users", usersSchema);

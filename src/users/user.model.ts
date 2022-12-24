import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: { type: String, require: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  avatar: { type: String },
});

export interface User {
  _id: string;
  name: string;
  username: string;
  password: string;
  avatar?: string;
}

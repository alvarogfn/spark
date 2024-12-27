import { model, Schema } from "mongoose";

import {
  UserSchema,
  UserSchemaMethods,
  UserSchemaModel,
  UserSchemaVirtuals,
} from "./types.js";

export const userSchema = new Schema<
  UserSchema,
  UserSchemaModel,
  UserSchemaMethods,
  {},
  UserSchemaVirtuals
>({
  email: {
    required: true,
    type: String,
    unique: true,
  },
  name: {
    required: true,
    type: String,
  },
  password: {
    required: true,
    type: String,
  },
});

export const UserModel = model<UserSchema, UserSchemaModel>("User", userSchema);

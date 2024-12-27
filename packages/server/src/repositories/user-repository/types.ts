import { HydratedDocument, Model } from "mongoose";

export type UserSchema = {
  email: string;
  name: string;
  password: string;
};

export type UserSchemaMethods = {};

export type UserSchemaVirtuals = {};

export type UserSchemaModel = Model<UserSchema>;

export type UserDocument = HydratedDocument<
  UserSchema,
  UserSchemaMethods & UserSchemaVirtuals
>;

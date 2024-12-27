import DataLoader from "dataloader";

import {
  UserDocument,
  UserSchema,
} from "@/repositories/user-repository/types.js";

import { UserModel } from "./schema.js";

type LoaderData<T> = null | T | T[];

export default class UserRepository {
  dataLoader = new DataLoader<string, LoaderData<UserDocument>>((ids) =>
    UserModel.find({ _id: { $in: ids } }),
  );

  async create(user: UserSchema) {
    const newUser = await UserModel.create({ user });

    this.dataLoader.prime(newUser.id, newUser);
  }

  async findAll({ page = 0, size = 10 }) {
    const stringKey = JSON.stringify({ page, size });
    const data = await this.dataLoader.load(stringKey);
    if (Array.isArray(data)) return data;

    const users = await UserModel.find(
      {},
      {},
      {
        limit: size,
        skip: page * size,
      },
    );

    this.dataLoader.prime(stringKey, users);

    for (const user of users) {
      this.dataLoader.prime(user.id, user);
    }

    return users;
  }

  async findById(id: string) {
    const data = await this.dataLoader.load(id);
    if (!data) return;

    return this.dataLoader.load(id);
  }
}

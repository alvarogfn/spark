import UserRepository from "@/repositories/user-repository/user-repository.js";

export default function makeRepositories() {
  return {
    userRepository: new UserRepository(),
  };
}

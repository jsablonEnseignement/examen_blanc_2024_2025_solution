import { users } from "../mocks/users.mock";

const getUsers = () => {
  return users.map((user) => user.name).sort();
};

const getUserByName = (name: string) => {
  return users.find((user) => user.name === name);
};

export {
  getUsers,
  getUserByName
};

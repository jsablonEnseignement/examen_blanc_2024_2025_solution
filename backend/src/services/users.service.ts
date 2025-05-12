import { users } from "../mocks/users.mock";

const getUsers = () => {
  return users.map((user) => user.name).sort();
};

const getUsersAdmin = () => {
  return users.filter((user) => user.role === "administrateur");
};

export {
  getUsers,
  getUsersAdmin
};

import { users } from "../mocks/users.mock";

const getUsersinitials = () => {
  return users.map((user) => user.name[0] + user.firstname[0]);
};

const getUsersAdmin = () => {
  return users.filter((user) => user.role === "administrateur");
};

export {
  getUsersinitials,
  getUsersAdmin
};

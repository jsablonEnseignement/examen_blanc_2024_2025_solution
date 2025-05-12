import * as UsersService from "../services/users.service";

export const getUsers = (req: any, res: any) => {
  const users = UsersService.getUsers();
  return res.status(200).json(users);
};

export const getUserByName = (req: any, res: any) => {
  const { name } = req.param;
  const user = UsersService.getUserByName(name);
  return res.status(200).json(user);
};
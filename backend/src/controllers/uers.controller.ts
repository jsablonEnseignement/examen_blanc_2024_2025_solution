import * as UsersService from "../services/users.service";

export const getUsers = (req: any, res: any) => {
  const users = UsersService.getUsers();
  return res.status(200).json(users);
};

export const getUsersAdmin = (req: any, res: any) => {
  const admins = UsersService.getUsersAdmin();
  return res.status(200).json(admins);
};
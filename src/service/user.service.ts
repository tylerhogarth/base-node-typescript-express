import { User } from "../model/User";

export class UserService {

  getUser(): User {
    return { username: 'username', email: 'email' } as User;
  }
}
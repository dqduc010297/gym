import { Role } from '../const/role';

export class LoginUser {
  isNeedToChangePassword: boolean;
  userName: string;
  avatarURL: string;
  token?: string;
  role: Role;
}

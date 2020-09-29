import { Role } from '../../../core/const/role';

export class LoginUser {
  isNeedToChangePassword: boolean;
  userName: string;
  avatarURL: string;
  token?: string;
  role: Role;
}

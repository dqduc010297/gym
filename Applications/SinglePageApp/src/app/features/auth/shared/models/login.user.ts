import { Gender } from 'src/app/const/gender';
import { Role } from 'src/app/const/role';

export class LoginUser {
  isNeedToChangePassword: boolean;
  userName: string;
  avatarURL: string;
  token?: string;
  permission: string[] = [];
  height: number;
  age: number;
  gender: Gender;
  role: Role;
}

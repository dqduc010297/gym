import { Gender } from 'src/app/core/const/gender';
import { RoleOptions } from 'src/app/core/const/role';

export class User {
  id: number;
  fullname: string;
  dateOfBirth: Date;
  gender: Gender;
  dateJoined: Date;
  avatarURL: string;
  status: number;
  dropboxToken: string;
  phoneNumber: string;
  email: string;
  tempPassword: string;
  roleName: string;
}

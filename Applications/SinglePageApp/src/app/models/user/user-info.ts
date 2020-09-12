import { Gender } from 'src/app/const/gender';

export class UserInfo {
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
}

import { Gender } from 'src/app/const/gender';

export class UserInfo {
  id: number;
  fullname: string;
  height: number;
  dateOfBirth: Date;
  gender: Gender;
  dateJoined: Date;
  avatarURL: string;
  status: string;
  dropboxToken: string;
  phoneNumber: string;
  email: string;
}

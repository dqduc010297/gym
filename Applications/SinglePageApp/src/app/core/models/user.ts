import { Gender } from '../const/gender';

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
}

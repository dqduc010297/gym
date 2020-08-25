import { Gender } from 'src/app/const/gender';

export class User {
    userName: string;
    avatarUrl: string;
    token?: string;
    permission: string[] = [];
    height: number;
    age: number;
    gender: Gender;
}

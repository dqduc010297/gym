import { SharedUser } from 'src/app/models/user/shared-user';

export class Image {
    id: number;
    url: string;
    sharedWith: SharedUser[] = [];
}

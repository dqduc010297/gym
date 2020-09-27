import { SharedUser } from 'src/app/models/user/shared-user';

export class MediaFile {
    id: number;
    url: string;
    isImage: boolean;
    sharedWith: SharedUser[] = [];
}

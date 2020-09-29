import { SharedUser } from './shared-user.model';

export class MediaFile {
    id: number;
    url: string;
    isImage: boolean;
    sharedWith: SharedUser[] = [];
}

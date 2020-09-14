import { Image } from '../shared/models/image.model';

export class AlbumResponse {
    myImages: Image[] = [];
    sharedImages: Image[] = [];
}
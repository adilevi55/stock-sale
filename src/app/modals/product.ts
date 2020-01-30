import { User } from './user';
import { Category } from './category';

export class Product {
    constructor(
        public _id?: string,
        public name?: string,
        public location?: string,
        public details?: string,
        public quantities?: number,
        public price?: number,
        public user?: User,
        public img?: {
            url: string,
            name: string,
            imgId: string,
        },
        public category?: Category
    ) { }
}

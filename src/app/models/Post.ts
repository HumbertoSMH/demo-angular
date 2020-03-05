import { PostBodyModel } from './PostBody';
import { AuthorModel } from './Author';

export class PostModel {
    constructor( id: number, authorId: number, title: string,  date: Date, categoryId: number, postImage: string
               , postbody: PostBodyModel, author: AuthorModel) {
        this.id = id;
        this.authorId = authorId;
        this.title = title;
        this.date = date;
        this.categoryId = categoryId;
        this.postImage = postImage;
        this.postbody = postbody;
        this.author = author;
    }

    id: number;
    authorId: number;
    title: string;
    date: Date;
    categoryId: number;
    postImage: string;
    postbody: PostBodyModel;
    author: AuthorModel;
}

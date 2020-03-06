import { PostBodyModel } from './PostBody';
import { AuthorModel } from './Author';
import { CategoryModel } from './Category';

export class PostModel {
    constructor( id: number, authorId: number, title: string,  date: Date, categoryId: number, postImage: string
               , postbody: PostBodyModel[], author: AuthorModel, category: CategoryModel) {
        this.id = id;
        this.authorId = authorId;
        this.title = title;
        this.date = date;
        this.categoryId = categoryId;
        this.postImage = postImage;
        this.postbody = postbody;
        this.author = author;
        this.category = category;
    }

    id: number;
    authorId: number;
    title: string;
    date: Date;
    categoryId: number;
    postImage: string;
    postbody: PostBodyModel[];
    author: AuthorModel;
    category: CategoryModel;
}

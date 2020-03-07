import { PostBodyModel } from './PostBody';
import { AuthorModel } from './Author';
import { CategoryModel } from './Category';

export class PostModel {
    id: number;
    authorId: number;
    Title: string;
    date: Date;
    categoryId: number;
    postImg: string;
    postbody: PostBodyModel[];
    author: AuthorModel;
    category: CategoryModel;
    constructor( id: number, authorId: number, title: string,  date: Date, categoryId: number, postImage: string
               , postbody: PostBodyModel[], author: AuthorModel, category: CategoryModel) {
        this.id = id;
        this.authorId = authorId;
        this.Title = title;
        this.date = date;
        this.categoryId = categoryId;
        this.postImg = postImage;
        this.postbody = postbody;
        this.author = author;
        this.category = category;
    }


}

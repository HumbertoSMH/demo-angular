import { Component, OnInit } from '@angular/core';
import { PostModel } from '../../models/Post';
import { PostBodyModel } from '../../models/PostBody';
import { AuthorModel } from '../../models/Author';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: []
})
export class PostsComponent implements OnInit {
  constructor() {
    const postModel : PostBodyModel = new PostBodyModel(1, 1, '');
    const authorModel : AuthorModel = new AuthorModel(1, 'Humberto', 'Corral', 'Humbertochernandez@outlook.com');
    this.postArray.push(new PostModel( 1, 1, 'Titulo', new Date(), 1
                                      , 'https://picsum.photos/500/150', postModel, authorModel));
    this.postArray.push(new PostModel( 1, 1, 'Titulo', new Date(), 1
                                      , 'https://picsum.photos/500/151', postModel, authorModel));
    this.postArray.push(new PostModel( 1, 1, 'Titulo', new Date(), 1
                                      , 'https://picsum.photos/500/152', postModel, authorModel));
                                      this.postArray.push(new PostModel( 1, 1, 'Titulo', new Date(), 1
                                      , 'https://picsum.photos/500/153', postModel, authorModel));
    this.postArray.push(new PostModel( 1, 1, 'Titulo', new Date(), 1
                                      , 'https://picsum.photos/500/154', postModel, authorModel));
    this.postArray.push(new PostModel( 1, 1, 'Titulo', new Date(), 1
                                      , 'https://picsum.photos/500/155', postModel, authorModel));
                                      this.postArray.push(new PostModel( 1, 1, 'Titulo', new Date(), 1
                                      , 'https://picsum.photos/500/156', postModel, authorModel));
    this.postArray.push(new PostModel( 1, 1, 'Titulo', new Date(), 1
                                      , 'https://picsum.photos/500/157', postModel, authorModel));
    this.postArray.push(new PostModel( 1, 1, 'Titulo', new Date(), 1
                                      , 'https://picsum.photos/500/158', postModel, authorModel));
   }

  postArray: Array<PostModel> = [];

  ngOnInit(): void {
  }

}

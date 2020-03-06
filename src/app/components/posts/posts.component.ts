import { Component, OnInit } from '@angular/core';
import { PostModel } from '../../models/Post';
import { PostBodyModel } from '../../models/PostBody';
import { AuthorModel } from '../../models/Author';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: []
})
export class PostsComponent implements OnInit {
  postArray: PostModel[] = [];
  constructor(private _postService: PostService) {
    this._postService.getAllPost().subscribe( response =>  {
      this.postArray = response;
    });
   }

  ngOnInit(): void {
  }

}

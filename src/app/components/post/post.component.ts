import { Component, OnInit } from '@angular/core';
import { PostModel } from '../../models/Post';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  id: number;
  Post: PostModel;
  constructor(private _postService: PostService, private _route: ActivatedRoute) {
    this.id = parseInt(this._route.snapshot.paramMap.get('id'));
    this._postService.getPostById(this.id).subscribe( response => {
      this.Post = response;
    }, error => {
      console.log(error);
    });
   }

  ngOnInit(): void {
  }

}

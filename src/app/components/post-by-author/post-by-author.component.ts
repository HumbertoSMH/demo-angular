import { Component, OnInit, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';
import { PostService } from '../../services/post.service';
import { PostModel } from '../../models/Post';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';



@Component({
  selector: 'app-post-by-author',
  templateUrl: './post-by-author.component.html',
  styleUrls: ['./post-by-author.component.css']
})
export class PostByAuthorComponent implements OnInit, OnDestroy {

  postArray: PostModel[];
  authorId: number;
  navigationSubscription: any;

  constructor(private _postService: PostService, private _route: ActivatedRoute, private _router: Router) {
    this.navigationSubscription = this._router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
       this.getAllPostByAuthorId();
      }
    });
  }

    getAllPostByAuthorId() {
      this.authorId =  parseInt(this._route.snapshot.paramMap.get('authorId'));
      this._postService.getPostsByAuthorId(this.authorId).subscribe(response => {
        console.log(response);
        this.postArray = response;
      });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
      if (this.navigationSubscription) {
        this.navigationSubscription.unsubscribe();
      }
    }

  }


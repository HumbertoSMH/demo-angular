import { Component, OnInit } from '@angular/core';
import { PostModel } from '../../models/Post';
import { PostBodyModel } from '../../models/PostBody';
import { AuthorModel } from '../../models/Author';
import { PostService } from 'src/app/services/post.service';
import { ActivatedRoute } from '@angular/router';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styles: []
})
export class PostsComponent implements OnInit {
  postArray: PostModel[] = [];
  authorId: number;
  newerToOlderOrder = true;
  numberOfPages: number[];
  constructor(private _postService: PostService, private _route: ActivatedRoute) {
    this._postService.getAllPost().subscribe( response =>  {
      this.postArray = response;
    });
    this.calculateNumberOfPages();
   }

   changeOrder() {
    if (this.newerToOlderOrder === false) {
      this._postService.getAllPost().subscribe( response =>  {
        this.postArray = response;
      });
    } else {
      this._postService.getAllPost('date', 'asc', 1).subscribe(response => {
        this.postArray = response;
      });
    }
    this.newerToOlderOrder =  !this.newerToOlderOrder;
  }
  ngOnInit(): void {
  }

  calculateNumberOfPages() {
    let totalRecords: number;
    let numberOfPagesTmp: number;
    let allRecords: any[];
    this._postService.getNumberOfPost().subscribe(response => {
      allRecords = response;
    });
    console.log(allRecords);
    totalRecords = allRecords.length;
    numberOfPagesTmp = totalRecords % 10;
    if (totalRecords % 10 > 0) {
        for (let i = 0; i <= numberOfPagesTmp; i++ ) {
          this.numberOfPages.push(i);
        }
    } else {
      for (let i = 0; i < numberOfPagesTmp; i++ ) {
        this.numberOfPages.push(i);
      }
    }
  }
}

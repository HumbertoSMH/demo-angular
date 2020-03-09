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
  numberOfPages: number[] = [];
  allRecords: number;
  order = 'desc';
  constructor(private _postService: PostService, private _route: ActivatedRoute) {
    this._postService.getAllPost().subscribe( response =>  {
      this.postArray = response;
    });
    this._postService.getNumberOfPost().subscribe(response => {
      this.allRecords = response.length;
      let totalPages = 0;
      if ((this.allRecords % 10) === 0) {
        totalPages = this.allRecords / 10;
      } else {
        totalPages = (this.allRecords / 10) + 1;
      }
      for (let x = 1; x < totalPages; x++) {
        this.numberOfPages.push(x);
      }
    });
   }

   changeOrder() {
    if (this.newerToOlderOrder === false) {
      this.order = 'desc';
      this._postService.getAllPost('date', this.order , 1).subscribe( response =>  {
        this.postArray = response;
      });
    } else {
      this.order = 'asc';
      this._postService.getAllPost('date', this.order, 1).subscribe(response => {
        this.postArray = response;
      });
    }
    this.newerToOlderOrder =  !this.newerToOlderOrder;
  }

  loadPageNumber(page: number = 1) {
    console.log('entro al metodo de loadpage');
    this._postService.getAllPost('date', this.order, page).subscribe( response =>  {
      this.postArray = response;
    });
  }
  ngOnInit(): void {
  }

  calculateNumberOfPages(records: number) {
    let totalPages = 0;
    if (records % 0 === 0) {
      totalPages = records % 0;
    } else {
      totalPages = (records % 0) + 1;
    }
    for (let x = 0; x < totalPages; x++) {
      this.numberOfPages.push(x);
    }
  }

}

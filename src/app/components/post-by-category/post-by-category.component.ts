import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostModel } from '../../models/Post';
import { CategoriesService } from '../../services/categories.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-post-by-category',
  templateUrl: './post-by-category.component.html',
  styleUrls: ['./post-by-category.component.css']
})
export class PostByCategoryComponent implements OnInit, OnDestroy {
  postArray: PostModel[];
  categoryId: number;
  navigationSubscription: any;
  constructor(private _categoriesService: CategoriesService, private _route: ActivatedRoute, private _router: Router) {
    this.navigationSubscription = this._router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
       this.getAllPostByCategoryId();
      }
    });
  }

  ngOnInit(): void {
  }

  getAllPostByCategoryId() {
    this.categoryId =  parseInt(this._route.snapshot.paramMap.get('categoryId'));
    this._categoriesService.getAllPostByCategoryId(this.categoryId).subscribe(response => {
      this.postArray = response;
    });
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

}

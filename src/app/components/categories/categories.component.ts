import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { CategoryModel } from '../../models/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categoryArray: CategoryModel[];
  constructor(private _categoyService: CategoriesService) {
    this.initializeData();
   }

  ngOnInit(): void {
  }

  initializeData() {
    this._categoyService.getAllCategories().subscribe(response => {
      this.categoryArray = response;
    });
  }

}

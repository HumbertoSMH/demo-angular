import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryModel } from '../models/Category';
import { AppSettings } from '../appsettings';
import { PostModel } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _http: HttpClient) { }

  getAllCategories(): Observable<CategoryModel[]> {
    return this._http.get<CategoryModel[]>(`${ AppSettings.URL_SERVICE}/categories`);
  }
  getAllPostByCategoryId(categoryId: number): Observable<PostModel[]> {
    return this._http.get<PostModel[]>(`${AppSettings.URL_SERVICE}/posts?categoryId=${categoryId}&${AppSettings.JSON_SERVICE_CONST}`);
  }
}

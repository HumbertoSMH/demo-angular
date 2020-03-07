import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoryModel } from '../models/Category';
import { AppSettings } from '../appsettings';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private _http: HttpClient) { }

  getAllCategories(): Observable<CategoryModel[]> {
    return this._http.get<CategoryModel[]>(`${ AppSettings.URL_SERVICE}/categories`);
  }
}

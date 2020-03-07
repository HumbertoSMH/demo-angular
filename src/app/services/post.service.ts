import { Injectable } from '@angular/core';
import { AppSettings } from '../appsettings';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostModel } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private _http: HttpClient) { }

  getAllPost(shortBy: string = 'date', order: string = 'desc', page: number = 1): Observable<PostModel[]> {
    let urlParams: string;
    urlParams = `&_sort=${shortBy}&_order=${order}&_page=${page}&_limit=10`;
    return this._http.get<PostModel[]>(`${AppSettings.URL_SERVICE}/posts?${AppSettings.JSON_SERVICE_CONST}${ urlParams}`);
  }

  getPostById(id: number) {
    return this._http.get<PostModel>(`${AppSettings.URL_SERVICE}/posts/${id}?${AppSettings.JSON_SERVICE_CONST}`);
  }

  getPostsByAuthorId(authorId: number) {
    return this._http.get<PostModel[]>(`${AppSettings.URL_SERVICE}/posts?authorId=${authorId}&${AppSettings.JSON_SERVICE_CONST}`);
  }

  getPostsByCategoryId(categoryId: number) {
    return this._http.get<PostModel[]>(`${AppSettings.URL_SERVICE}/posts?categoryId=${categoryId}${AppSettings.JSON_SERVICE_CONST}`);
  }

  getNumberOfPost(): Observable<PostModel[]> {
    return this._http.get<PostModel[]>(`${AppSettings.URL_SERVICE}/posts`);
  }
}

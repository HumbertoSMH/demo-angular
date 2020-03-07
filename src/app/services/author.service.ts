import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthorModel } from '../models/Author';
import { AppSettings } from '../appsettings';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private _http: HttpClient) { }

  getAuthors(): Observable<AuthorModel[]> {
    return this._http.get<AuthorModel[]>(`${AppSettings.URL_SERVICE}/authors?_short=FirstName`);
  }

  getAuthorById(id: number): Observable<AuthorModel> {
    return this._http.get<AuthorModel>(`${AppSettings.URL_SERVICE}/authors?id=${id}`);
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthorService } from '../../services/author.service';
import { AuthorModel } from '../../models/Author';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html'
})
export class AuthorComponent implements OnInit {
  authorArray: AuthorModel[] = [];
  constructor(private _authorService: AuthorService, private _route: ActivatedRoute, private _router: Router) {
    this._authorService.getAuthors().subscribe(response => {
      this.authorArray = response;
    });
  }

  ngOnInit(): void {
  }

  goToPostByAuthor(authorId: number) {
    this._router.navigate(['posts', 'author', authorId]);
  }


}

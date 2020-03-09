import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';

/*Components Imports*/
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { PostsComponent } from './components/posts/posts.component';

/*Angular Material Imports */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule  } from '@angular/material/button';
import { MatCardModule    } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';
import { MatListModule } from '@angular/material/list';

/*Services Imports*/
import { PostService } from '../app/services/post.service';
import { PostComponent } from './components/post/post.component';
import { AuthorComponent } from './components/author/author.component';
import { PageNotFoundComponent } from './components/shared/pagenotfound/pagenotfound.component';
import { PostByAuthorComponent } from './components/post-by-author/post-by-author.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { PostByCategoryComponent } from './components/post-by-category/post-by-category.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PostsComponent,
    PostComponent,
    AuthorComponent,
    PageNotFoundComponent,
    PostByAuthorComponent,
    CategoriesComponent,
    PostByCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

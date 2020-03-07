import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { PageNotFoundComponent } from './components/shared/pagenotfound/pagenotfound.component';
import { PostByAuthorComponent } from './components/post-by-author/post-by-author.component';


const routes: Routes = [
  { path: 'posts', component: PostsComponent},
  { path: 'post/:id', component: PostComponent},
  { path: 'author/:authorId/posts', component: PostByAuthorComponent},
  { path: ''    , component: PostsComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

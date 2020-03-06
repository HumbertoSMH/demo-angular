import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';


const routes: Routes = [
  { path: 'posts', component: PostsComponent},
  { path: 'author/:id/posts', component: PostComponent},
  { path: 'post/:id', component: PostComponent}, 
  { path: ''    , component: PostsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponent } from './create/add-user/add-user.component';
import { AddLikeComponent } from './create/add-like/add-like.component';
import { AddCommentComponent } from './create/add-comment/add-comment.component';
import { AddPostComponent } from './create/add-post/add-post.component';
import { CommentComponent } from './model/comment/comment.component';
import { UserComponent } from './model/user/user.component';
import { PostComponent } from './model/post/post.component';
import { UpdateCommentComponent } from './update/update-comment/update-comment.component';
import { UpdateLikeComponent } from './update/update-like/update-like.component';
import { UpdateUserComponent } from './update/update-user/update-user.component';
import { UpdatePostComponent } from './update/update-post/update-post.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';
import { LikeComponent } from './model/like/like.component'; 

const routes: Routes = [
  { path: 'add-user', component: AddUserComponent },
  { path: 'add-post', component: AddUserComponent },
  { path: 'add-comment', component: AddCommentComponent },
  { path: 'list-user', component: UserComponent },
  { path: 'list-post', component: PostComponent },
  { path: 'list-comment', component: CommentComponent },
  { path: 'update-post/:postId', component: UpdatePostComponent },
  { path: 'update-user/:userId', component:UpdateUserComponent},
  { path: 'update-comment/:commentId', component: UpdateCommentComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    AddUserComponent,
    AddLikeComponent,
    AddCommentComponent,
    AddPostComponent,
    CommentComponent,
    LikeComponent,
    UserComponent,
    PostComponent,
    UpdateCommentComponent,
    UpdateLikeComponent,
    UpdateUserComponent,
    UpdatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

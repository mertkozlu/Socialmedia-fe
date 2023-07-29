import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { UpdatePostRequest } from '../dto/UpdatePostRequest';
import { CreatePostRequest } from '../dto/CreatePostRequest';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:8080/posts';


  constructor(private http: HttpClient) {}

  getAllPosts(): Observable<any>{
    return this.http.get<any> (this.apiUrl + "/getAll")
  }
  

  addPost(post: CreatePostRequest) {
    return this.http.post<any>(`${this.apiUrl}/add`, post, {});
  }

  updatePost(post: UpdatePostRequest) {
    return this.http.put<any>(`${this.apiUrl}/update`, post, {});
  }

  deletePost(postId: number) {
    const url = `${this.apiUrl}/delete/${postId}`;
    return this.http.delete<any>(url);
  }
}
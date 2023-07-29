import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { UpdateCommentRequest } from '../dto/UpdateCommentRequest';
import { CreateCommentRequest } from '../dto/CreateCommentRequest';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private apiUrl = 'http://localhost:8080/likes';


  constructor(private http: HttpClient) {}

  getAllComments(): Observable<any>{
    return this.http.get<any> (this.apiUrl + "/getAll")
  }
  

  addComment(comment: CreateCommentRequest) {
    return this.http.post<any>(`${this.apiUrl}/add`, comment, {});
  }

  deleteComment(commentId: number) {
    const url = `${this.apiUrl}/delete/${commentId}`;
    return this.http.delete<any>(url);
  }
}
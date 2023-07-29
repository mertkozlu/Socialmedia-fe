import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { UpdateLikeRequest } from '../dto/UpdateLikeRequest';
import { CreateLikeRequest } from '../dto/CreateLikeRequest';

@Injectable({
  providedIn: 'root'
})
export class LikeService {
  private apiUrl = 'http://localhost:8080/likes';


  constructor(private http: HttpClient) {}

  getAllLikes(): Observable<any>{
    return this.http.get<any> (this.apiUrl + "/getAll")
  }
  

  addLike(like: CreateLikeRequest) {
    return this.http.post<any>(`${this.apiUrl}/add`, like, {});
  }

  deleteLike(likeId: number) {
    const url = `${this.apiUrl}/delete/${likeId}`;
    return this.http.delete<any>(url);
  }
}
import { CreateUserRequest } from "../dto/CreateUserRequest";
import { UpdateUserRequest } from "../dto/UpdateUserRequest";
import { Injectable } from "@angular/core";
import {HttpClient, HttpParams} from '@angular/common/http'
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
  })
  export class UserService {
  
    private apiUrl = 'http://localhost:8080/users'
  
    constructor(private http:HttpClient) { 
      
    }
  
    getAllUsers(): Observable<any>{
      return this.http.get<any> (this.apiUrl + "/getAll")
    }

    addUser(user:CreateUserRequest){
      return this.http.post<any> (this.apiUrl + "/add", user,{})
    } 

    updateUser(userId: number, user: UpdateUserRequest): Observable<any> {
        return this.http.put<any>(`${this.apiUrl}/update/${userId}`, user, {});
      }
      
    deleteUser(userId:number){
      const url = `${this.apiUrl}/delete/${userId}`;
      return this.http.delete<any> (url)
    }
}
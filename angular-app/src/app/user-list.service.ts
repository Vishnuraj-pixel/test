import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  private _url:string = "https://reqres.in/api/users?page=";

  constructor(private http: HttpClient) { }

  getUserList (page: number = 1):Observable<IUser[]> {
    return this.http.get<IUser[]>(this._url + page);
  } 
}

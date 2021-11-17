import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './user';

@Injectable()
export class UserListService {

  private _url:string = "https://reqres.in/api/users?page=2";

  constructor(private http: HttpClient) { }

  getUserList ():Observable<IUser[]> {
    return this.http.get<IUser[]>(this._url);
  }
}

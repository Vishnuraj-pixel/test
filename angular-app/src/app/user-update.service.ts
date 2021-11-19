import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserUpdateService {

  private _url:string = "https://reqres.in/api/users/";

  constructor(private http: HttpClient) { }

  getUserUpdate (id:number = 1):Observable<IUser[]> {
    console.log(id);
    return this.http.get<IUser[]>(this._url + id);
  }
  changeUser(data: any) {
    return this.http.put<IUser>(this._url, data);
  }
}

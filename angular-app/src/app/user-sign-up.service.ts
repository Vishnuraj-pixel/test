import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserSignUpService {

  private _url:any = "https://reqres.in/api/users";

  constructor(private http: HttpClient) { }
  
  users() {
    return this.http.get<IUser>(this._url);
  }

  saveUser(data: any) {
    return this.http.post<IUser>(this._url, data);
  }
}


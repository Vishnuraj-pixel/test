import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserDeleteService {

  private _url = "https://reqres.in/api/users/";

  constructor(private http: HttpClient) { }

  getUserDelete (data:any) {
    return this.http.delete(this._url,data);
  }
}

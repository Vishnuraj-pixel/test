import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserCreateService {

  private _url:string = "https://reqres.in/api/users/";

  constructor(private http: HttpClient) { }

  getUserCreate (id:number = 1):Observable<IUser[]> {
    return this.http.get<IUser[]>(this._url + id);
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserCreateService {


  private _url:string = "https://reqres.in/api/users/2";

  constructor(private http: HttpClient) { }

  getUserCreate ():Observable<IUser[]> {
    return this.http.get<IUser[]>(this._url);
  }

}

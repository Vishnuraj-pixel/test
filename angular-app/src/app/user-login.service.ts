import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { IUser } from './user';
import {  Observable, throwError } from 'rxjs'

@Injectable()

export class UserLoginService {

  private _url:string = "https://reqres.in/api/login";

  constructor(private http: HttpClient) { }

  getUserLogin ():Observable<any> {
    return this.http.get<IUser[]>(this._url);
  }
}

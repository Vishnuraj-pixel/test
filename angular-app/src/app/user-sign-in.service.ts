import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';


@Injectable()

export class UserLoginService {

  private _url:any = "https://reqres.in/api/login";

  constructor(private http: HttpClient) { }

  users() {
    return this.http.get(this._url);
  }

  saveUser(data: any) {
    return this.http.post(this._url, data);
  }
}

import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  private _url:string = "https://reqres.in/api/login"

  constructor(private http: HttpClient) { }
}

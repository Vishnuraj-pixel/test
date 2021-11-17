import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  userLogIn = [];

  constructor(private _userLoginService: UserLoginService) { }

  ngOnInit() {
    this._userLoginService.getUserLogin().subscribe(data => this.userLogIn = data);
  }
}

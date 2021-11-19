import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserSignUpService } from '../user-sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  users: any;

  constructor(private _userSignUpService: UserSignUpService, private route: Router) { }

  ngOnInit() {
    this._userSignUpService.users().subscribe((data) => {
        this.users = data;
    });
  }
  getUserFormData(data: any) {
    console.log(data)
    this._userSignUpService.saveUser(data).subscribe((result:any) => {
      console.log(result);
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserSignUpService } from '../user-sign-up.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  // users: any;
  private userName: any;
  message: string = '';
  userData: any;

  constructor(
    private _userSignUpService: UserSignUpService,
    private route: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit() {}
  getUserFormData(data: any) {
    console.log(data.name);
    console.log(data.job);
    if (!data.name) {
      this.message = 'name req!';
    } else if (!data.job) {
      this.message = 'job req!';
    } else {
      this.userData = data;
      this._userSignUpService.saveUser(this.userData).subscribe((result: any) => {
           console.log(this.userData);
          this.userName = result.name;
          // console.log(this.userName);
          // console.log(data);
          if (this.userName) {
            this.message = 'You have successfully created';
            console.log(this.message);
            this.toastr.success(this.message);
          }
          else {
            this.message = "Error occured!"
            this.toastr.error(this.message);
            console.log(this.message);
          }
        });
    }
  }
}

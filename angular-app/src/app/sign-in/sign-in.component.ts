import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginService } from '../user-sign-in.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  usersForm: any;
  isDisabled:boolean = false;
  message: string = "";
  snackbar:string = "";
  
  constructor(private _userLoginService: UserLoginService, private route: Router, private toastr: ToastrService) { }

  ngOnInit() {
    
    
  }
  getUserFormData(data: any) {
    console.log(data)
    if (!data.email) {
      this.message = 'name required';
      this.toastr.success(this.message);
    }else if(!data.password) {
      this.message = 'Job is required';
      this.toastr.success(this.message);
    }else {
      this._userLoginService.saveUser(data).subscribe((result:any) => {
        localStorage.setItem("token", result.token);
        this.route.navigate(['/list']);
      });
      // if(localStorage.getItem("token")) {
      //   this.message = "You have successfully loggedIn";
      //   this.toastr.success(this.message);
  
      // } else {
      //   this.message = "Please enter valid mail and password"; 
      //   this.toastr.error(this.message);
      // }
    }
  }
}

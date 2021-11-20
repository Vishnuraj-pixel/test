import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserCreateComponent } from '../user-create/user-create.component';
import { UserLoginService } from '../user-sign-in.service';

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
  
  constructor(private _userLoginService: UserLoginService, private route: Router) { }

  ngOnInit() {
    
    
  }
  getUserFormData(data: any) {
    console.log(data)
    this._userLoginService.saveUser(data).subscribe((result:any) => {
      localStorage.setItem("token", result.token);
      this.route.navigate(['/list']);
    });
    if(localStorage.getItem("token")) {
      this.snackbar = "show";
      setTimeout( () => {
        this.snackbar = this.snackbar.replace("show", "");
      }, 3000);
      this.message = "You have successfully loggedIn";

    } else {
      this.message = "Please enter valid mail and password"; 
    }
    console.log(this.message)
  }
}

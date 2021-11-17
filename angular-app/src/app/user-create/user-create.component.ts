import { Component, OnInit } from '@angular/core';
import { UserCreateService } from '../user-create.service';
import { UserLoginService } from '../user-login.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  userCreate: any = [];
  itemImageUrl : any;

  constructor(private _userCreateService: UserCreateService) { }
  
  ngOnInit() {
    this._userCreateService.getUserCreate().subscribe((data:any) => {
      this.userCreate = data.data,
      console.log(data.data)
      this.itemImageUrl = data.data.avatar;
    });
   
    
  } 
 

}

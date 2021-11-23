import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDeleteService } from '../user-delete.service';
import { UserListService } from '../user-list.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList:any = [];
  pagesInUrl:any;
  totalPages:Number | undefined;
  message: string | undefined;
  userEmail:any = []
  userArray : any = [];
  userFirstName : any = [];
  firstName: any = [];
  email: any = [];
  list: any = [];

  constructor(
    private _userListService: UserListService, 
    private route: Router, 
    private _userDeleteService: UserDeleteService,
    private toastr: ToastrService,
    ) { }

  ngOnInit() {
   this.getData(1); 
   this.pagesInUrl = []
  //  console.log(this.pagesInUrl);
  }

  getData(page: number){
    this._userListService.getUserList(page).subscribe((data:any) => {
      this.userList = data.data;
      this.userArray = data.data;
      this.list = data.data;
      this.totalPages = data.total_pages;
      // console.log(this.totalPages);
      for(let i = 1; i <= data.total_pages && this.pagesInUrl <= data.total_pages; i++){
        this.pagesInUrl.push(i);
      }return this.pagesInUrl;
    }); 
  }
  showTableContent(data:any) {
    const temp:any = [];
    if (data.target.value) {
      //console.log(data.target.value);
      this.userArray.forEach((element:any) => {
        if(element.first_name == data.target.value){
          temp.push(element)
          console.log(temp);
        }
      })
    this.userList= temp;
    } else{
      this.userList= this.list;
    }
  }

  logOut() {
    localStorage.removeItem("token");
    this.route.navigate(['/sign-in']);
  }

  userDelete (data:any) {
    console.log(data);
    if(confirm("Would you want to delete this user?")) {
      // console.log("Hello");
      this._userDeleteService.getUserDelete(data).subscribe((data:any) => {
        console.log("Deleted!");
        this.message  = "Deleted user!";
        this.toastr.info(this.message);
      })
    }else {
      console.log("World");
      this.message = "You cannot delete this user";
      this.toastr.info(this.message);
    }
  }
}

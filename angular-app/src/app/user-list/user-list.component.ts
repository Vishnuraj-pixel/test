import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserDeleteService } from '../user-delete.service';
import { UserListService } from '../user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public userList:any = [];
  pagesInUrl:any;
  totalPages:Number | undefined;
  
  constructor(private _userListService: UserListService, private route: Router, private _userDeleteService: UserDeleteService) { }

  ngOnInit() {
   this.getData(1); 
   this.pagesInUrl = []
  //  console.log(this.pagesInUrl);
  }

  getData(page: number){
    this._userListService.getUserList(page).subscribe((data:any) => {
      this.userList = data.data,
      this.totalPages = data.total_pages
      // console.log(this.totalPages);
      for(let i = 1; i <= data.total_pages && this.pagesInUrl <= data.total_pages; i++){
        this.pagesInUrl.push(i);
      }return this.pagesInUrl;
    }); 
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
      })
    }else {
      console.log("World");
    }
  }
}

import { Component, OnInit } from '@angular/core';
import { UserListService } from '../user-list.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  public userList:any = [];

  constructor(private _userListService: UserListService) { }

  ngOnInit() {
    this._userListService.getUserList().subscribe((data:any) => {
      this.userList = data.data,
      console.log(data.data)
    });
  }

}

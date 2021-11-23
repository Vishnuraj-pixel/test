import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserUpdateService } from '../user-update.service';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  userId: any;
  userName: any;

  constructor(private _userUpdateService: UserUpdateService, private route: Router, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.userId = id;
    });
    this._userUpdateService.getUserUpdate(this.userId).subscribe((data:any) => {
      this.userName = data.data.first_name + " " + data.data.last_name;
    })
  }
  getUserFormData(data: any) {
    // console.log(data)
    this._userUpdateService.changeUser(data).subscribe((result:any) => {
      console.log(result);
    });
  }

}

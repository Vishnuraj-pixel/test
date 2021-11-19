import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { UserCreateService } from '../user-create.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  userCreate: any = [];
  itemImageUrl : any;
  // pagesInUrl:any;
  id:string = "";

  totalPages:Number | undefined;
  userId: any;

  constructor(private _userCreateService: UserCreateService, private route: Router, private router: ActivatedRoute ) { 
    // this.id = this.route.snapshot.param[('id')];
  }
  
  ngOnInit() {
    this.router.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.userId = id;
      console.log(this.userId)
    })
    this._userCreateService.getUserCreate(this.userId).subscribe((data:any) => {
      this.userCreate = data.data,
      // console.log(data.data)
      this.itemImageUrl = data.data.avatar;
      // console.log(data.data.id);
      }); 
  } 

  logOut() {
    localStorage.removeItem("token");
    this.route.navigate(['/sign-in']);
  }
 

}

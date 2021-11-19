import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserListComponent } from './user-list/user-list.component';

import {  AuthenticationGuard } from './authentication.guard';
import { UserUpdateComponent } from './user-update/user-update.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'create/:id', component: UserCreateComponent, 
      canActivate: [AuthenticationGuard],
  },
  { path: 'list', component: UserListComponent,
      canActivate: [AuthenticationGuard]  // visit home only if authenticated
  },
    
  { path: 'update/:id', component: UserUpdateComponent,
      canActivate:[AuthenticationGuard]
  },
  { path: '**', component: PageNotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  SignInComponent, 
  SignUpComponent, 
  UserCreateComponent, 
  UserListComponent, 
  UserUpdateComponent,
  PageNotFoundComponent
];

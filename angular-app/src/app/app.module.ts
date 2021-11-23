import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { routingComponents } from './app-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { HeaderUserComponent } from './header/header-user/header-user.component';
import { HeaderSignInComponent } from './header/header-sign-in/header-sign-in.component';
import { FooterUserComponent } from './footer/footer-user/footer-user.component';

import { HttpClientModule  } from '@angular/common/http';
import { UserLoginService } from './user-sign-in.service';
import { FormsModule } from '@angular/forms';
import { UserListService } from './user-list.service';
import { UserCreateService } from './user-create.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UserSignUpService } from './user-sign-up.service';
import { UserDeleteService } from './user-delete.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    UserListComponent,
    UserCreateComponent,
    UserUpdateComponent,
    HeaderUserComponent,
    HeaderSignInComponent,
    FooterUserComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
    UserLoginService, 
    UserListService, 
    UserCreateService, 
    UserSignUpService, 
    UserUpdateComponent, 
    UserDeleteService],
  bootstrap: [AppComponent]
})
export class AppModule { }

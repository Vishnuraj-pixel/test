import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {  routingComponents} from './app-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { HeaderUserComponent } from './header/header-user/header-user.component';
import { HeaderSignInComponent } from './header/header-sign-in/header-sign-in.component';
import { FooterUserComponent } from './footer/footer-user/footer-user.component';

import {  HttpClientModule  } from '@angular/common/http';
import { UserLoginService } from './user-login.service';
import { FormsModule } from '@angular/forms';
import { UserListService } from './user-list.service';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserLoginService, UserListService],
  bootstrap: [AppComponent]
})
export class AppModule { }

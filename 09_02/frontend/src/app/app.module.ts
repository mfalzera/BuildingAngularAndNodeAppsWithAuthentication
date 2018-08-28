import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdInputModule, MdSnackBarModule, MdToolbarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MessagesComponent } from './messages.component';
import { AppComponent } from './app.component';
import { WebService } from './web.service';
import { NewMessageComponent } from './new-message.component';
import { NavComponent } from './nav.component';
import { HomeComponent } from './home.component';
import { RegisterComponent } from './register.component';
import { AuthService } from './auth.service';

var routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'messages',
    component: MessagesComponent
  },
  {
    path: 'messages/:name',
    component: MessagesComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }];



@NgModule({
  imports: [BrowserModule, HttpModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(routes), BrowserAnimationsModule, MdButtonModule, MdCardModule, MdInputModule, MdSnackBarModule, MdToolbarModule],
  declarations: [AppComponent, MessagesComponent, NewMessageComponent, NavComponent, HomeComponent, RegisterComponent],
  bootstrap: [AppComponent],
  providers: [WebService, AuthService]
})
export class AppModule { }
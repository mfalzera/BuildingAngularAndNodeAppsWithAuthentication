import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdInputModule, MdSnackBarModule, MdToolbarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { MessagesComponent } from './messages.component';
import { AppComponent } from './app.component';
import { WebService } from './web.service';
import { NewMessageComponent } from './new-message.component';
import { NavComponent } from './nav.component';

@NgModule({
  imports: [BrowserModule, HttpModule, FormsModule, BrowserAnimationsModule, MdButtonModule, MdCardModule, MdInputModule, MdSnackBarModule, MdToolbarModule],
  declarations: [AppComponent, MessagesComponent, NewMessageComponent, NavComponent],
  bootstrap: [AppComponent],
  providers: [WebService]
})
export class AppModule { }
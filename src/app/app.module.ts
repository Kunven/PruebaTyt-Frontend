import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {Component} from '@angular/core';
import {MaterialModule} from './material/material.module';
import { DialogUserComponent } from './dialog-user/dialog-user.component';
import { FormsModule } from '@angular/forms';
import { DialogDelUserComponent } from './dialog-del-user/dialog-del-user.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogUserComponent,
    DialogDelUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,MaterialModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

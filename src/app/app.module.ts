import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ProfileService } from './services/profile.service';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
// import { HomeComponent } from './components/home/home.component';

@NgModule({
declarations: [
  AppComponent,
  ProfileComponent,
  // HomeComponent,
],

imports: [
  BrowserModule,
  HttpModule,
  FormsModule
],
providers: [ProfileService],
bootstrap: [AppComponent]
})
export class AppModule { }

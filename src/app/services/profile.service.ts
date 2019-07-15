import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import { User } from '../user';
import { Repo } from '../repo';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  user:User;
  repo:Repo;

  private username: string;
  private clientid = '0d2a747596660833bc28';
  private clientsecret = '0cfedbf5f1db4577e2f474a9222f37bcfe639bd6';
  constructor(private http: Http) {
    console.log("service is good to go!");
    this.username = "Pixel-0";
  }

  getProfileInfo() {
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret).map(res => res.json());
  }
  getProfileRepos() {
    return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret).map(res => res.json());
  }
  updateProfile(username: string) {
    this.username = username;
  }
}

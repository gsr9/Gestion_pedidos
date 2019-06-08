import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:8080/users/';

  constructor(private http: HttpClient) { }

  getUser(): User {
    return JSON.parse(localStorage.getItem('user')) as User;
  }

  saveUser(user: User) {
    return this.http.post(this.url, user);
  }
}

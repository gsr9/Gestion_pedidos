import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { ok } from 'assert';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = 'http://localhost:8080/login/';

  constructor(private http: HttpClient) { }

  login(user: User) {
    this.http.post(this.url, user).subscribe((u: User) => {
      localStorage.setItem('user', JSON.stringify(u));
    });
  }
}

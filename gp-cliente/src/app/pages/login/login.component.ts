import { UserService } from './../../services/user.service';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  onLoginForm = this.fb.group({
    'email': ['', Validators.compose([Validators.required, Validators.email])],
    'password': ['', Validators.required]
  });

  wrongUser = false;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    if (this.userService.getUser()) {
      this.router.navigateByUrl('/mispedidos');
    }
  }

  login() {
    const email = this.onLoginForm.controls.email.value;
    const pass = this.onLoginForm.controls.password.value;
    const user: User = new User();
    user.email = email;
    user.pass = pass;

    this.loginService.login(user).subscribe((u: User) => {
      if (u) {
        localStorage.setItem('user', JSON.stringify(u));
        this.router.navigateByUrl('/mispedidos');
        this.wrongUser = false;
      } else {
        this.wrongUser = true;
      }
    });
  }

}

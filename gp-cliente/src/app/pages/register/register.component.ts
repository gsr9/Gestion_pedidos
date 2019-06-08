import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  onRegisterForm = this.fb.group({
    'name': ['', Validators.required],
    'email': ['', Validators.compose([Validators.required, Validators.email])],
    'password': ['', Validators.required],
    'repeatPass': ['', Validators.required]
  }, { validator: this.checkPasswords });

  constructor(
    private fb: FormBuilder,
    private userService: UserService
    ) { }

  ngOnInit() {
  }

  register() {
    const name = this.onRegisterForm.controls.name.value;
    const email = this.onRegisterForm.controls.email.value;
    const pass = this.onRegisterForm.controls.password.value;
    const user: User = new User();
    user.name = name;
    user.email = email;
    user.pass = pass;

    this.userService.saveUser(user).subscribe((userSaved: User) => {
      localStorage.setItem('user', JSON.stringify(userSaved));
    })

  }

  checkPasswords(group: FormGroup) {
    const pass = group.controls.password.value;
    const confirmPass = group.controls.repeatPass.value;
    
    return pass === confirmPass ? null : { notSame: true };
  }
}

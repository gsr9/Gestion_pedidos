import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private userService: UserService, private router: Router) { }

  canActivate(): boolean {

    const user = this.userService.getUser();
    if (user !== null) {
      console.log(user);
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }
}

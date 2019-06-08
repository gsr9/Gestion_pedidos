import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }

  logged() {
    console.log(this.router.url);
    if (this.router.url === '/login' || this.router.url === '/registro' || this.router.url === '/') {
      return false;
    }
    return true;
  }

}

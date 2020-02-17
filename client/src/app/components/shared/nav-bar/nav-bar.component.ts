import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  isCollapsed: Boolean = true;
  isAuth: boolean = false;
  isAdmin: boolean = false;

  constructor(
    public authService: AuthService
  ) {
    this.isAdmin = authService.isAdmin;
    this.isAuth = authService.isAuth;

    this.authService.isAuthChanged.subscribe(() => {
      this.isAuth = this.authService.isAuth;
      this.isAdmin = this.authService.isAdmin;
    })
  }

  toggleSidenav() {
    this.isNavBarVisible = !this.isNavBarVisible;
  }

  logout() {
    this.authService.logout();
    this.authService.initializeAuthenticationState();
  }
}

import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sidebar-list',
  templateUrl: './sidebar-list.component.html',
  styleUrls: ['./sidebar-list.component.css']
})
export class SidebarListComponent implements OnChanges {
  isAuth: boolean = false;
  isAdmin: boolean = false;

  constructor(
    private authService: AuthService
  ) {
    this.isAdmin = authService.isAdmin;
    this.isAuth = authService.isAuth;

    authService.isAuthChanged.subscribe(() => {
      this.isAuth = authService.isAuth;
      this.isAdmin = authService.isAdmin;
    })
  }

  ngOnChanges() {
    this.isAuth = this.authService.isAuth;
  }

  logout() {
    this.authService.logout();
    this.authService.initializeAuthenticationState();
  }
}

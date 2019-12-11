import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { ImplicitReceiver } from '@angular/compiler';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  @Output() sidenavToggle = new EventEmitter<void>();
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
    this.sidenavToggle.emit();
  }

  logout() {
    this.authService.logout();
    this.authService.initializeAuthenticationState();
  }
}

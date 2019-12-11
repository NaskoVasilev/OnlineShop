import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-sidebar-list',
  templateUrl: './sidebar-list.component.html',
  styleUrls: ['./sidebar-list.component.css']
})
export class SidebarListComponent implements OnInit {
  isAuth: boolean = false;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.isAuth = this.authService.isAuth;
  }

  logout() {
    this.authService.logout();
  }
}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { globalConstants } from 'src/app/common/global-constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private router: Router,
    private snackbar: MatSnackBar
  ) { }

  getToken(): string{
    return localStorage.getItem(globalConstants.jwtTokenKey);
  }

  get isAuth(): boolean{
    return this.getToken() != null;
  }

  register(email: string, password: string) {
  }

  login(email: string, password: string) {

    // this.snackbar.open(error.message, 'Undo', {
    //   duration: 3000
    // });
  }

  logout() {
  }
}
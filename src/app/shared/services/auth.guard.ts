import { Injectable } from '@angular/core';
import { AuthService } from '../../module/login/services/auth-service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate{
  /**
   *
   */
  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate() {
    if(this.auth.isAuthenticated()){
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}

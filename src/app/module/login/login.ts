import { Component } from '@angular/core';
import { AuthService } from './services/auth-service';
import { UserContext } from '../../UserContext';
import {MatFormFieldModule} from '@angular/material/form-field';
import { UserLoginContext } from '../../UserLoginContext';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatInputModule
  ],
  standalone: true,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  user: string = "";
  password: string = "";
  /**
   *
   */
  constructor(private authService: AuthService, private router: Router) {
  }

  login(){
    console.log("Login attempt with user:", this.user, "and password:", this.password);
    this.authService.authenticate({EmailOrUsername: this.user, Password: this.password}).subscribe(response => {
      console.log(response);
      console.log("Authenticated:", this.authService.isAuthenticated());
      this.authService.authenticated$.subscribe(isAuth => {
        if (isAuth) {
          this.router.navigate(["/home"]);
        }
      });
    });
  }
}

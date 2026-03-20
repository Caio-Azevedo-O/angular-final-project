import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AuthService } from '../../module/login/services/auth-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  @Input() drawer!: MatDrawer;
  
  isLogged!: boolean;
  /**
   *
  */
 constructor(private auth: AuthService, private router: Router) {
   this.auth.authenticated$.subscribe(isAuth =>{
    this.isLogged = isAuth;
   });
}


  openSidenav() {
    this.drawer.toggle();
  }
  logoff(){
    this.auth.setAuthenticated(false);
    this.router.navigate(["/login"]);
  }
}

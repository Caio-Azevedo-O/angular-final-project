import { Component, Input } from '@angular/core';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { RouterLink } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../module/login/services/auth-service';

@Component({
  selector: 'app-sidenav',
  imports: [
    MatDrawer,
    RouterLink,
    MatSidenavModule,
    MatIcon,
    MatButtonModule
  ],
  standalone: true,
  templateUrl: './sidenav.html',
  styleUrl: './sidenav.scss',
})
export class Sidenav {
  @Input() drawer!: MatDrawer;
  
  isLogged!: boolean;

  /**
   *
   */
  constructor(private auth: AuthService) {
    this.auth.authenticated$.subscribe(isAuth =>{
      this.isLogged = isAuth;
    });
  }

  toggleDrawer(){
    this.drawer.toggle();
  }
}

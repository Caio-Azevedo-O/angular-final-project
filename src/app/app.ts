import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateProduct } from './module/create-product/create-product';
import { Profile } from './module/profile/profile';
import { Products } from './module/products/products';
import { Login } from './module/login/login';
import { Home } from './module/home/home';
import { Navbar } from './shared/navbar/navbar';
import { Sidenav } from './shared/sidenav/sidenav';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CreateProduct,
    Home,
    Login,
    Products,
    Profile,
    Sidenav,
    Navbar,
    MatDrawer,
    MatSidenavModule,
    MatButtonModule
  ],
  templateUrl: './app.html',
  styleUrls: [
    './app.scss'
  ]
})
export class App {
  protected readonly title = signal('final-project');
}

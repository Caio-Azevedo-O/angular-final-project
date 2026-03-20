import { Component, Input } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

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

  openSidenav() {
    this.drawer.toggle();
  }
}

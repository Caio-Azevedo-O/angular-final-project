import { Routes } from '@angular/router';
import { Home } from './module/home/home';
import { Products } from './module/products/products';
import { LandingPage } from './module/landing-page/landing-page';
import { Login } from './module/login/login';
import { CreateProduct } from './module/create-product/create-product';

export const routes: Routes = [
    {path: "", redirectTo: "/home", pathMatch: "full",},
    {path: "home", component: Home},
    {path: "products", component: Products},
    {path: "landing-page", component: LandingPage},
    {path: "login", component: Login},
    {path: "create-product", component: CreateProduct},
];

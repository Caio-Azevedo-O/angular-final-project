import { Routes } from '@angular/router';
import { Home } from './module/home/home';
import { Products } from './module/products/products';
import { Login } from './module/login/login';
import { CreateProduct } from './module/create-product/create-product';
import { AuthGuard } from './shared/services/auth.guard';

export const routes: Routes = [
    {path: "", redirectTo: "/login", pathMatch: "full",},
    {path: "home", component: Home, canActivate: [AuthGuard]},
    {path: "products", component: Products, canActivate: [AuthGuard]},
    {path: "login", component: Login},
    {path: "create-product", component: CreateProduct, canActivate: [AuthGuard]},
];

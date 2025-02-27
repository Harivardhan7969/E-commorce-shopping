import { Routes } from '@angular/router';
import { BuyerComponent } from './features/buyer/buyer.component';
import { HomeComponent } from './features/home/home.component';
import { ProductListComponent } from './features/product/product-list/product-list.component';
import { ProductDetailsComponent } from './features/product/product-details/product-details.component';
import { AboutComponent } from './features/about/about.component';
import { CartComponent } from './features/cart/cart.component';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { DemoComponent } from './demo/demo.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'buyer', component: BuyerComponent },

    { path: 'product-list', component: ProductListComponent },
    { path: 'product-details', component: ProductDetailsComponent },
    { path: 'about-us', component: AboutComponent },
    {
        path: "cart", component: CartComponent

    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: 'register', component: RegisterComponent
    },
    {
        path: 'demo', component: DemoComponent
    }
];

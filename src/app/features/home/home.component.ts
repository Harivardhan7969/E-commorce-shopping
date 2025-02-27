import { Component } from '@angular/core';
import { BestSellerProductsComponent } from '../best-seller-products/best-seller-products.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BestSellerProductsComponent,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { WinterCardComponent } from '../winter-card/winter-card.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-best-seller-products',
  standalone: true,
  imports: [NgFor,WinterCardComponent,RouterLink],
  templateUrl: './best-seller-products.component.html',
  styleUrl: './best-seller-products.component.css'
})
export class BestSellerProductsComponent {

  marqueeIteam:string[]=[
   "Well come Chic Couture",
   "50% Sale OFF",
   "Return Policy",
   "Free Shopping",
   "Quality Products",
   "Fast Delivery"
  ]
  

}

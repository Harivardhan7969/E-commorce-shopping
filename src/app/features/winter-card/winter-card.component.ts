import { Component } from '@angular/core';
import { SingleCardProductComponent } from '../single-card-product/single-card-product.component';

@Component({
  selector: 'app-winter-card',
  standalone: true,
  imports: [SingleCardProductComponent],
  templateUrl: './winter-card.component.html',
  styleUrl: './winter-card.component.css'
})
export class WinterCardComponent {

}

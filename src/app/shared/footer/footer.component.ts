import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
  standalone: true,

})
export class FooterComponent {

  marqueeIteam:string[]=[
    "Well come Chic Couture",
    "50% Sale OFF",
    "Return Policy",
    "Free Shopping",
    "Quality Products",
    "Fast Delivery"
   ]

}

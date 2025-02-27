import { Component, inject } from '@angular/core';
// import { ImageService } from '../../../../core/services/images.service';
// import { Image } from '../../../../core/models/image';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  // images: any ;
  // imageService: ImageService = inject(ImageService);

   constructor(){

//for getting images from imagesJSON
    // this.imageService.getImages().subscribe(
    //   (data) => {
    //     console.log(data);
    //     this.images = data.images;
    //     console.log(this.images);
    //   })
  
    }

}

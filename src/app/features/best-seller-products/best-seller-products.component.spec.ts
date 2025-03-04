import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellerProductsComponent } from './best-seller-products.component';

describe('BestSellerProductsComponent', () => {
  let component: BestSellerProductsComponent;
  let fixture: ComponentFixture<BestSellerProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestSellerProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestSellerProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

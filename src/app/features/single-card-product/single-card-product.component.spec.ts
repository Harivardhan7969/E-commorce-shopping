import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCardProductComponent } from './single-card-product.component';

describe('SingleCardProductComponent', () => {
  let component: SingleCardProductComponent;
  let fixture: ComponentFixture<SingleCardProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleCardProductComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleCardProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinterCardComponent } from './winter-card.component';

describe('WinterCardComponent', () => {
  let component: WinterCardComponent;
  let fixture: ComponentFixture<WinterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WinterCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WinterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

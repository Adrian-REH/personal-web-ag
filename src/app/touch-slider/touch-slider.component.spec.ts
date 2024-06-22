import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TouchSliderComponent } from './touch-slider.component';

describe('TouchSliderComponent', () => {
  let component: TouchSliderComponent;
  let fixture: ComponentFixture<TouchSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TouchSliderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TouchSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

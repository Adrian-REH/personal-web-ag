import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideChildCardComponent } from './slide-child-card.component';

describe('SlideChildCardComponent', () => {
  let component: SlideChildCardComponent;
  let fixture: ComponentFixture<SlideChildCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SlideChildCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SlideChildCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

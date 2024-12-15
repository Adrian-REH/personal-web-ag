import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCardInfoComponent } from './child-card-info.component';

describe('ChildCardInfoComponent', () => {
  let component: ChildCardInfoComponent;
  let fixture: ComponentFixture<ChildCardInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildCardInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildCardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

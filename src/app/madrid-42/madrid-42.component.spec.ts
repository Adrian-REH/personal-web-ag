import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Madrid42Component } from './madrid-42.component';

describe('Madrid42Component', () => {
  let component: Madrid42Component;
  let fixture: ComponentFixture<Madrid42Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Madrid42Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Madrid42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

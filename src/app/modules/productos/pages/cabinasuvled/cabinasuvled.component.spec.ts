import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinasuvledComponent } from './cabinasuvled.component';

describe('CabinasuvledComponent', () => {
  let component: CabinasuvledComponent;
  let fixture: ComponentFixture<CabinasuvledComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CabinasuvledComponent]
    });
    fixture = TestBed.createComponent(CabinasuvledComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

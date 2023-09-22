import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsmaltesComponent } from './esmaltes.component';

describe('EsmaltesComponent', () => {
  let component: EsmaltesComponent;
  let fixture: ComponentFixture<EsmaltesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EsmaltesComponent]
    });
    fixture = TestBed.createComponent(EsmaltesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

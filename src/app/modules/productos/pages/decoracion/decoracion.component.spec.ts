import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoracionComponent } from './decoracion.component';

describe('DecoracionComponent', () => {
  let component: DecoracionComponent;
  let fixture: ComponentFixture<DecoracionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DecoracionComponent]
    });
    fixture = TestBed.createComponent(DecoracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

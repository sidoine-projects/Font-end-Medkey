import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegimesMedicauxComponent } from './regimes-medicaux.component';

describe('RegimesMedicauxComponent', () => {
  let component: RegimesMedicauxComponent;
  let fixture: ComponentFixture<RegimesMedicauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegimesMedicauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegimesMedicauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

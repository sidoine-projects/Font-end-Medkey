import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SallesFacturableComponent } from './salles-facturable.component';

describe('SallesFacturableComponent', () => {
  let component: SallesFacturableComponent;
  let fixture: ComponentFixture<SallesFacturableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SallesFacturableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SallesFacturableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

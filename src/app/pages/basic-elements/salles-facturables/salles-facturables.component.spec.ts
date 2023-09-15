import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SallesFacturablesComponent } from './salles-facturables.component';

describe('SallesFacturablesComponent', () => {
  let component: SallesFacturablesComponent;
  let fixture: ComponentFixture<SallesFacturablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SallesFacturablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SallesFacturablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

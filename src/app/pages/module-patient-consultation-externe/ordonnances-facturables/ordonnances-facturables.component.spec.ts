import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdonnancesFacturablesComponent } from './ordonnances-facturables.component';

describe('OrdonnancesFacturablesComponent', () => {
  let component: OrdonnancesFacturablesComponent;
  let fixture: ComponentFixture<OrdonnancesFacturablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdonnancesFacturablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdonnancesFacturablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

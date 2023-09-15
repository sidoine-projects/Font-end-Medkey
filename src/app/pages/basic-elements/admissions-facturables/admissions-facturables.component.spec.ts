import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionsFacturablesComponent } from './admissions-facturables.component';

describe('AdmissionsFacturablesComponent', () => {
  let component: AdmissionsFacturablesComponent;
  let fixture: ComponentFixture<AdmissionsFacturablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionsFacturablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionsFacturablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

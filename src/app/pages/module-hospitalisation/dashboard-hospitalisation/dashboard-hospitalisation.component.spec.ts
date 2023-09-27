import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHospitalisationComponent } from './dashboard-hospitalisation.component';

describe('DashboardHospitalisationComponent', () => {
  let component: DashboardHospitalisationComponent;
  let fixture: ComponentFixture<DashboardHospitalisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardHospitalisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHospitalisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

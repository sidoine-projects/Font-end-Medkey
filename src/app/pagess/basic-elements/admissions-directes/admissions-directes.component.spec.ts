import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionsDirectesComponent } from './admissions-directes.component';

describe('AdmissionsDirectesComponent', () => {
  let component: AdmissionsDirectesComponent;
  let fixture: ComponentFixture<AdmissionsDirectesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionsDirectesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionsDirectesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

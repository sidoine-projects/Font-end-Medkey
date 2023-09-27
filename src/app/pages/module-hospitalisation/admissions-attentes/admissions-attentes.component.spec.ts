import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionsAttentesComponent } from './admissions-attentes.component';



describe('AdmissionsAttentesComponent', () => {
  let component: AdmissionsAttentesComponent;
  let fixture: ComponentFixture<AdmissionsAttentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmissionsAttentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionsAttentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

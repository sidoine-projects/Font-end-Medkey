import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasExemptionComponent } from './cas-exemption.component';

describe('CasExemptionComponent', () => {
  let component: CasExemptionComponent;
  let fixture: ComponentFixture<CasExemptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasExemptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasExemptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

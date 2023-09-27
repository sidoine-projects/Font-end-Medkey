import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExemptionComponent } from './add-exemption.component';

describe('AddExemptionComponent', () => {
  let component: AddExemptionComponent;
  let fixture: ComponentFixture<AddExemptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExemptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExemptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

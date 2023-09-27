import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssurancepatientComponent } from './add-assurancepatient.component';

describe('AddAssurancepatientComponent', () => {
  let component: AddAssurancepatientComponent;
  let fixture: ComponentFixture<AddAssurancepatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAssurancepatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssurancepatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

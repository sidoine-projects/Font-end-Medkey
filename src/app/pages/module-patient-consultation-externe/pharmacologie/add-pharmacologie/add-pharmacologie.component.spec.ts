import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPharmacologieComponent } from './add-pharmacologie.component';

describe('AddPharmacologieComponent', () => {
  let component: AddPharmacologieComponent;
  let fixture: ComponentFixture<AddPharmacologieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPharmacologieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPharmacologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

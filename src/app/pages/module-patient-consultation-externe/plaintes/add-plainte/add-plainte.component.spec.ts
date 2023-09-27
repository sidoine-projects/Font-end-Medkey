import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlainteComponent } from './add-plainte.component';

describe('AddPlainteComponent', () => {
  let component: AddPlainteComponent;
  let fixture: ComponentFixture<AddPlainteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPlainteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlainteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

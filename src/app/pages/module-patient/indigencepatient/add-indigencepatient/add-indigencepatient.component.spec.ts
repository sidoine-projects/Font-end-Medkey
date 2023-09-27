import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIndigencepatientComponent } from './add-indigencepatient.component';

describe('AddIndigencepatientComponent', () => {
  let component: AddIndigencepatientComponent;
  let fixture: ComponentFixture<AddIndigencepatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIndigencepatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIndigencepatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

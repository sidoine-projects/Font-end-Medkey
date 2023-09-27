import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAfacturableComponent } from './add-afacturable.component';

describe('AddAfacturableComponent', () => {
  let component: AddAfacturableComponent;
  let fixture: ComponentFixture<AddAfacturableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAfacturableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAfacturableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInventairepetiteComponent } from './add-inventairepetite.component';

describe('AddInventairepetiteComponent', () => {
  let component: AddInventairepetiteComponent;
  let fixture: ComponentFixture<AddInventairepetiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInventairepetiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInventairepetiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategorieprocedureComponent } from './add-categorieprocedure.component';

describe('AddCategorieprocedureComponent', () => {
  let component: AddCategorieprocedureComponent;
  let fixture: ComponentFixture<AddCategorieprocedureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCategorieprocedureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategorieprocedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

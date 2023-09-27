import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategorieplainteComponent } from './add-categorieplainte.component';

describe('AddCategorieplainteComponent', () => {
  let component: AddCategorieplainteComponent;
  let fixture: ComponentFixture<AddCategorieplainteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCategorieplainteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategorieplainteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

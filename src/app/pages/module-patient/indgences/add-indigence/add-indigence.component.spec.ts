import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIndigenceComponent } from './add-indigence.component';

describe('AddIndigenceComponent', () => {
  let component: AddIndigenceComponent;
  let fixture: ComponentFixture<AddIndigenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddIndigenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddIndigenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExamensgenerauxComponent } from './add-examensgeneraux.component';

describe('AddExamensgenerauxComponent', () => {
  let component: AddExamensgenerauxComponent;
  let fixture: ComponentFixture<AddExamensgenerauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExamensgenerauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExamensgenerauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

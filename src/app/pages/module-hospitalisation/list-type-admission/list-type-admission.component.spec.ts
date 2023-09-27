import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTypeAdmissionComponent } from './list-type-admission.component';

describe('ListTypeAdmissionComponent', () => {
  let component: ListTypeAdmissionComponent;
  let fixture: ComponentFixture<ListTypeAdmissionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTypeAdmissionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTypeAdmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

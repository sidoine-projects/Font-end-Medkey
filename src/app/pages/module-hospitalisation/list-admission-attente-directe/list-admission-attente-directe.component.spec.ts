import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAdmissionAttenteDirecteComponent } from './list-admission-attente-directe.component';

describe('ListAdmissionAttenteDirecteComponent', () => {
  let component: ListAdmissionAttenteDirecteComponent;
  let fixture: ComponentFixture<ListAdmissionAttenteDirecteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAdmissionAttenteDirecteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAdmissionAttenteDirecteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

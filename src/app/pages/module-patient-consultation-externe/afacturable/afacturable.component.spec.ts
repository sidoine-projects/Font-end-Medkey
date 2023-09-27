import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfacturableComponent } from './afacturable.component';

describe('AfacturableComponent', () => {
  let component: AfacturableComponent;
  let fixture: ComponentFixture<AfacturableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfacturableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfacturableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

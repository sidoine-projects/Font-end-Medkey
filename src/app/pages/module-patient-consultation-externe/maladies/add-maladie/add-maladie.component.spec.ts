import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMaladieComponent } from './add-maladie.component';

describe('AddMaladieComponent', () => {
  let component: AddMaladieComponent;
  let fixture: ComponentFixture<AddMaladieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMaladieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMaladieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

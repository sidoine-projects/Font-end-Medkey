import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCompagnieComponent } from './add-compagnie.component';

describe('AddCompagnieComponent', () => {
  let component: AddCompagnieComponent;
  let fixture: ComponentFixture<AddCompagnieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCompagnieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCompagnieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

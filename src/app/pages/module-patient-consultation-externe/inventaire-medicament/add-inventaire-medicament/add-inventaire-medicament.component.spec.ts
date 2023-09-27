import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInventaireMedicamentComponent } from './add-inventaire-medicament.component';

describe('AddInventaireMedicamentComponent', () => {
  let component: AddInventaireMedicamentComponent;
  let fixture: ComponentFixture<AddInventaireMedicamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddInventaireMedicamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInventaireMedicamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModeleHistoriqueComponent } from './add-modele-historique.component';

describe('AddModeleHistoriqueComponent', () => {
  let component: AddModeleHistoriqueComponent;
  let fixture: ComponentFixture<AddModeleHistoriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModeleHistoriqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddModeleHistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

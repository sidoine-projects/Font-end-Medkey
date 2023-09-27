import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExamenPhysiqueComponent } from './add-examen-physique.component';

describe('AddExamenPhysiqueComponent', () => {
  let component: AddExamenPhysiqueComponent;
  let fixture: ComponentFixture<AddExamenPhysiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddExamenPhysiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExamenPhysiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

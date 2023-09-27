import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleExamenPhysiqueComponent } from './modele-examen-physique.component';

describe('ModeleExamenPhysiqueComponent', () => {
  let component: ModeleExamenPhysiqueComponent;
  let fixture: ComponentFixture<ModeleExamenPhysiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleExamenPhysiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeleExamenPhysiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

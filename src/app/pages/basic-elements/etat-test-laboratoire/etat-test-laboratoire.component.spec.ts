import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatTestLaboratoireComponent } from './etat-test-laboratoire.component';

describe('EtatTestLaboratoireComponent', () => {
  let component: EtatTestLaboratoireComponent;
  let fixture: ComponentFixture<EtatTestLaboratoireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EtatTestLaboratoireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatTestLaboratoireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

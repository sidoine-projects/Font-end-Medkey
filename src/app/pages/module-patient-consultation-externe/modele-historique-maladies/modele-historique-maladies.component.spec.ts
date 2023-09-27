import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleHistoriqueMaladiesComponent } from './modele-historique-maladies.component';

describe('ModeleHistoriqueMaladiesComponent', () => {
  let component: ModeleHistoriqueMaladiesComponent;
  let fixture: ComponentFixture<ModeleHistoriqueMaladiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleHistoriqueMaladiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeleHistoriqueMaladiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

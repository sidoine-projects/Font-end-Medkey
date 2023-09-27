import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventairePetitesSallesSoinsComponent } from './inventaire-petites-salles-soins.component';

describe('InventairePetitesSallesSoinsComponent', () => {
  let component: InventairePetitesSallesSoinsComponent;
  let fixture: ComponentFixture<InventairePetitesSallesSoinsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventairePetitesSallesSoinsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventairePetitesSallesSoinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

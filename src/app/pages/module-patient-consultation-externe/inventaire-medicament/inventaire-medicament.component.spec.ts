import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventaireMedicamentComponent } from './inventaire-medicament.component';

describe('InventaireMedicamentComponent', () => {
  let component: InventaireMedicamentComponent;
  let fixture: ComponentFixture<InventaireMedicamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InventaireMedicamentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InventaireMedicamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

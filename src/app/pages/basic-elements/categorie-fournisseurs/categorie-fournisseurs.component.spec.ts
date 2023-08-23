import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieFournisseursComponent } from './categorie-fournisseurs.component';

describe('CategorieFournisseursComponent', () => {
  let component: CategorieFournisseursComponent;
  let fixture: ComponentFixture<CategorieFournisseursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieFournisseursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieFournisseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

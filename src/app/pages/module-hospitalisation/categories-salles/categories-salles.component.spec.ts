import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesSallesComponent } from './categories-salles.component';

describe('CategoriesSallesComponent', () => {
  let component: CategoriesSallesComponent;
  let fixture: ComponentFixture<CategoriesSallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesSallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesSallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

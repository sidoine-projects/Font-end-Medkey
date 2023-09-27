import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieEmploiComponent } from './categorie-emploi.component';

describe('CategorieEmploiComponent', () => {
  let component: CategorieEmploiComponent;
  let fixture: ComponentFixture<CategorieEmploiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieEmploiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieEmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

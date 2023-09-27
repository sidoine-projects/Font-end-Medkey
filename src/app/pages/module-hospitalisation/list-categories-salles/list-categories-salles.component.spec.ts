import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCategoriesSallesComponent } from './list-categories-salles.component';

describe('ListCategoriesSallesComponent', () => {
  let component: ListCategoriesSallesComponent;
  let fixture: ComponentFixture<ListCategoriesSallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListCategoriesSallesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCategoriesSallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

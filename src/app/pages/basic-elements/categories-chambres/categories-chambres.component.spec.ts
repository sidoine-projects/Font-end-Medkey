import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesChambresComponent } from './categories-chambres.component';

describe('CategoriesChambresComponent', () => {
  let component: CategoriesChambresComponent;
  let fixture: ComponentFixture<CategoriesChambresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesChambresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesChambresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

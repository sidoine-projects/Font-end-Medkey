import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieProceduresComponent } from './categorie-procedures.component';

describe('CategorieProceduresComponent', () => {
  let component: CategorieProceduresComponent;
  let fixture: ComponentFixture<CategorieProceduresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieProceduresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieProceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

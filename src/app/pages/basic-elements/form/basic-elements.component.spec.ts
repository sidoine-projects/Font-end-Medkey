import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormulaireComponent } from './basic-elements.component';

describe('FormulaireComponent', () => {
  let component: FormulaireComponent;
  let fixture: ComponentFixture<FormulaireComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

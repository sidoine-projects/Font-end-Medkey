import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssurancepatientComponent } from './assurancepatient.component';

describe('AssurancepatientComponent', () => {
  let component: AssurancepatientComponent;
  let fixture: ComponentFixture<AssurancepatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssurancepatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssurancepatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

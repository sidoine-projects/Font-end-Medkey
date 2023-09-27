import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnquetesInterventionsComponent } from './enquetes-interventions.component';

describe('EnquetesInterventionsComponent', () => {
  let component: EnquetesInterventionsComponent;
  let fixture: ComponentFixture<EnquetesInterventionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnquetesInterventionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnquetesInterventionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

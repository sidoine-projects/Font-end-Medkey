import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrdonnancesFacturableComponent } from './add-ordonnances-facturable.component';

describe('AddOrdonnancesFacturableComponent', () => {
  let component: AddOrdonnancesFacturableComponent;
  let fixture: ComponentFixture<AddOrdonnancesFacturableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOrdonnancesFacturableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrdonnancesFacturableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

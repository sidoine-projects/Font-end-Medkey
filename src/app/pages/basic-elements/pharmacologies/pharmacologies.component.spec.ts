import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacologiesComponent } from './pharmacologies.component';

describe('PharmacologiesComponent', () => {
  let component: PharmacologiesComponent;
  let fixture: ComponentFixture<PharmacologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacologiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

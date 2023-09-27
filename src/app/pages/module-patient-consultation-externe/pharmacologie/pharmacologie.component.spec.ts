import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PharmacologieComponent } from './pharmacologie.component';

describe('PharmacologieComponent', () => {
  let component: PharmacologieComponent;
  let fixture: ComponentFixture<PharmacologieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PharmacologieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllocationsLitsComponent } from './allocations-lits.component';

describe('AllocationsLitsComponent', () => {
  let component: AllocationsLitsComponent;
  let fixture: ComponentFixture<AllocationsLitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllocationsLitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllocationsLitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

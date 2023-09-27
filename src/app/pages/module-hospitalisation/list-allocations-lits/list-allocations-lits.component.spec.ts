import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllocationsLitsComponent } from './list-allocations-lits.component';

describe('ListAllocationsLitsComponent', () => {
  let component: ListAllocationsLitsComponent;
  let fixture: ComponentFixture<ListAllocationsLitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAllocationsLitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllocationsLitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

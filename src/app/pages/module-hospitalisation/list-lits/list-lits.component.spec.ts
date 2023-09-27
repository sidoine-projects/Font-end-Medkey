import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLitsComponent } from './list-lits.component';

describe('ListLitsComponent', () => {
  let component: ListLitsComponent;
  let fixture: ComponentFixture<ListLitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListLitsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

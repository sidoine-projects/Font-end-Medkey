import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitfacturationComponent } from './forfaitfacturation.component';

describe('ForfaitfacturationComponent', () => {
  let component: ForfaitfacturationComponent;
  let fixture: ComponentFixture<ForfaitfacturationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitfacturationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitfacturationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

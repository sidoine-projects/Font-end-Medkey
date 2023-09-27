import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndigencepatientComponent } from './indigencepatient.component';

describe('IndigencepatientComponent', () => {
  let component: IndigencepatientComponent;
  let fixture: ComponentFixture<IndigencepatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndigencepatientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndigencepatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndgencesComponent } from './indgences.component';

describe('IndgencesComponent', () => {
  let component: IndgencesComponent;
  let fixture: ComponentFixture<IndgencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndgencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndgencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

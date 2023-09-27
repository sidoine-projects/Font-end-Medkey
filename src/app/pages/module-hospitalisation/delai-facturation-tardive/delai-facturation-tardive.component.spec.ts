import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelaiFacturationTardiveComponent } from './delai-facturation-tardive.component';

describe('DelaiFacturationTardiveComponent', () => {
  let component: DelaiFacturationTardiveComponent;
  let fixture: ComponentFixture<DelaiFacturationTardiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DelaiFacturationTardiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DelaiFacturationTardiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

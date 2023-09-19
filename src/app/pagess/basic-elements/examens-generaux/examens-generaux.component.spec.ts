import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamensGenerauxComponent } from './examens-generaux.component';

describe('ExamensGenerauxComponent', () => {
  let component: ExamensGenerauxComponent;
  let fixture: ComponentFixture<ExamensGenerauxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamensGenerauxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamensGenerauxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

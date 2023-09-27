import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrancheComponent } from './branche.component';
// import { FormWizardModule } from 'angular2-wizard';

describe('BrancheComponent', () => {
  let component: BrancheComponent;
  let fixture: ComponentFixture<BrancheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrancheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrancheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

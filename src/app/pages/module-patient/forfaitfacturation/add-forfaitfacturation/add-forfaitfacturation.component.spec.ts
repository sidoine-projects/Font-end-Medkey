import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddForfaitfacturationComponent } from './add-forfaitfacturation.component';

describe('AddForfaitfacturationComponent', () => {
  let component: AddForfaitfacturationComponent;
  let fixture: ComponentFixture<AddForfaitfacturationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddForfaitfacturationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddForfaitfacturationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

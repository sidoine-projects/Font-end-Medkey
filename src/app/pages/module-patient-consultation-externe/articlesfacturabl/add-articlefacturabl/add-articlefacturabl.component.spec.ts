import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddArticlefacturablComponent } from './add-articlefacturabl.component';

describe('AddArticlefacturablComponent', () => {
  let component: AddArticlefacturablComponent;
  let fixture: ComponentFixture<AddArticlefacturablComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddArticlefacturablComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddArticlefacturablComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

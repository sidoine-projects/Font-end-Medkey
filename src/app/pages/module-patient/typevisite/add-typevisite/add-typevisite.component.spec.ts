import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTypevisiteComponent } from './add-typevisite.component';

describe('AddTypevisiteComponent', () => {
  let component: AddTypevisiteComponent;
  let fixture: ComponentFixture<AddTypevisiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTypevisiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTypevisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

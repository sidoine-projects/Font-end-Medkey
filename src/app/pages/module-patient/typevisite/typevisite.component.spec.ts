import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypevisiteComponent } from './typevisite.component';

describe('TypevisiteComponent', () => {
  let component: TypevisiteComponent;
  let fixture: ComponentFixture<TypevisiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypevisiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypevisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

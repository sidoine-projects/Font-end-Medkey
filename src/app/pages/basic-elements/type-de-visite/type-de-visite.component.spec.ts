import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDeVisiteComponent } from './type-de-visite.component';

describe('TypeDeVisiteComponent', () => {
  let component: TypeDeVisiteComponent;
  let fixture: ComponentFixture<TypeDeVisiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeDeVisiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeDeVisiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

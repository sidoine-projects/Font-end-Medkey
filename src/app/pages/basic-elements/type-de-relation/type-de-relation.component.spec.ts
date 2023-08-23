import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDeRelationComponent } from './type-de-relation.component';

describe('TypeDeRelationComponent', () => {
  let component: TypeDeRelationComponent;
  let fixture: ComponentFixture<TypeDeRelationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeDeRelationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeDeRelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

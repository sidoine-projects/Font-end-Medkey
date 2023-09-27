import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TyperelationComponent } from './typerelation.component';

describe('TyperelationComponent', () => {
  let component: TyperelationComponent;
  let fixture: ComponentFixture<TyperelationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TyperelationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TyperelationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

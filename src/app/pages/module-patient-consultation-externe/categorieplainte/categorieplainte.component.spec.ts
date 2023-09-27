import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieplainteComponent } from './categorieplainte.component';

describe('CategorieplainteComponent', () => {
  let component: CategorieplainteComponent;
  let fixture: ComponentFixture<CategorieplainteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieplainteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategorieplainteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

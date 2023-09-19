import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LitsFacturablesComponent } from './lits-facturables.component';

describe('LitsFacturablesComponent', () => {
  let component: LitsFacturablesComponent;
  let fixture: ComponentFixture<LitsFacturablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LitsFacturablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LitsFacturablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

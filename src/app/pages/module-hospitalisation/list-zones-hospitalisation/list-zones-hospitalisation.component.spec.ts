import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListZonesHospitalisationComponent } from './list-zones-hospitalisation.component';

describe('ListZonesHospitalisationComponent', () => {
  let component: ListZonesHospitalisationComponent;
  let fixture: ComponentFixture<ListZonesHospitalisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListZonesHospitalisationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListZonesHospitalisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

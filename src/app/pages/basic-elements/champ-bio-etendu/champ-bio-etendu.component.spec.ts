import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampBioEtenduComponent } from './champ-bio-etendu.component';

describe('ChampBioEtenduComponent', () => {
  let component: ChampBioEtenduComponent;
  let fixture: ComponentFixture<ChampBioEtenduComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampBioEtenduComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampBioEtenduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

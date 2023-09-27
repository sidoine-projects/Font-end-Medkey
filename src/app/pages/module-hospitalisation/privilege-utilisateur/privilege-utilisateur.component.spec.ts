import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivilegeUtilisateurComponent } from './privilege-utilisateur.component';

describe('PrivilegeUtilisateurComponent', () => {
  let component: PrivilegeUtilisateurComponent;
  let fixture: ComponentFixture<PrivilegeUtilisateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrivilegeUtilisateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrivilegeUtilisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

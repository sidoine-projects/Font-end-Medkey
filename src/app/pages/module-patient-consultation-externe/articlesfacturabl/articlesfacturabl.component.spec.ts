import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesfacturablComponent } from './articlesfacturabl.component';

describe('ArticlesfacturablComponent', () => {
  let component: ArticlesfacturablComponent;
  let fixture: ComponentFixture<ArticlesfacturablComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesfacturablComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesfacturablComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

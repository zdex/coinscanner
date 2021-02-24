import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogcategoriesComponent } from './blogcategories.component';

describe('BlogcategoriesComponent', () => {
  let component: BlogcategoriesComponent;
  let fixture: ComponentFixture<BlogcategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogcategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogcategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

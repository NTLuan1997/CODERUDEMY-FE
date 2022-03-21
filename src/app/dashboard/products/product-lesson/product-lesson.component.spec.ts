import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLessonComponent } from './product-lesson.component';

describe('ProductLessonComponent', () => {
  let component: ProductLessonComponent;
  let fixture: ComponentFixture<ProductLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductLessonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

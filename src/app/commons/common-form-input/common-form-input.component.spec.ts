import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonFormInputComponent } from './common-form-input.component';

describe('CommonFormInputComponent', () => {
  let component: CommonFormInputComponent;
  let fixture: ComponentFixture<CommonFormInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonFormInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

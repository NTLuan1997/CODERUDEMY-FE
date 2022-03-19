import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonAnonymousComponent } from './common-anonymous.component';

describe('CommonAnonymousComponent', () => {
  let component: CommonAnonymousComponent;
  let fixture: ComponentFixture<CommonAnonymousComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonAnonymousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonAnonymousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

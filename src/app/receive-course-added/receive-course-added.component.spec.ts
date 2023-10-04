import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiveCourseAddedComponent } from './receive-course-added.component';

describe('ReceiveCourseAddedComponent', () => {
  let component: ReceiveCourseAddedComponent;
  let fixture: ComponentFixture<ReceiveCourseAddedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReceiveCourseAddedComponent]
    });
    fixture = TestBed.createComponent(ReceiveCourseAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

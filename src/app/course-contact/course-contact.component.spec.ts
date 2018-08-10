import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseContactComponent } from './course-contact.component';

describe('CourseContactComponent', () => {
  let component: CourseContactComponent;
  let fixture: ComponentFixture<CourseContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

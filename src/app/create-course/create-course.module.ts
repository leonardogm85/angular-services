import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateCourseComponent } from './create-course.component';
import { ReceiveCourseAddedComponent } from '../receive-course-added/receive-course-added.component';
// import { CoursesService } from '../shared/courses.service';

@NgModule({
  declarations: [
    CreateCourseComponent,
    ReceiveCourseAddedComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CreateCourseComponent
  ],
  // providers: [CoursesService]
})
export class CreateCourseModule { }

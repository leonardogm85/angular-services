import { Component, OnInit } from '@angular/core';

import { CoursesService } from '../shared/courses.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css'],
  providers: [CoursesService]
})
export class CreateCourseComponent implements OnInit {

  courses: string[] = [];

  constructor(
    private _coursesService: CoursesService
  ) { }

  onAddCourse(course: string): void {
    this._coursesService.addCourse(course);
  }

  ngOnInit(): void {
    this.courses = this._coursesService.getCourses();
  }

}

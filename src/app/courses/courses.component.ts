import { Component, OnInit } from '@angular/core';

import { CoursesService } from '../shared/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CoursesService]
})
export class CoursesComponent implements OnInit {

  courses: string[] = [];

  constructor(
    private _coursesService: CoursesService
  ) { }

  ngOnInit(): void {
    this.courses = this._coursesService.getCourses();
    CoursesService.staticEmitNewCourse.subscribe(
      course => this.courses.push(course)
    );
  }

}

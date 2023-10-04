import { Component } from '@angular/core';

import { CoursesService } from '../shared/courses.service';

@Component({
  selector: 'app-receive-course-added',
  templateUrl: './receive-course-added.component.html',
  styleUrls: ['./receive-course-added.component.css']
})
export class ReceiveCourseAddedComponent {

  course: string = '';

  constructor(
    private _coursesService: CoursesService
  ) { }

  ngOnInit(): void {
    this._coursesService.emitCourseAdded.subscribe(added => this.course = added);
  }

}

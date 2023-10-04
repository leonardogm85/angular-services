import { EventEmitter, Injectable } from '@angular/core';

import { LogService } from './log.service';

@Injectable()
export class CoursesService {

  static staticEmitNewCourse: EventEmitter<string> = new EventEmitter<string>();

  emitCourseAdded: EventEmitter<string> = new EventEmitter<string>();

  private _courses: string[] = ['Angular', 'React', 'Vue'];

  constructor(
    private _logService: LogService
  ) {
    this._logService.consoleLog('Constructor course service');
  }

  getCourses(): string[] {
    this._logService.consoleLog('Get courses');
    return this._courses;
  }

  addCourse(course: string): void {
    this._logService.consoleLog(`Add course: ${course}`);
    this._courses.push(course);
    this.emitCourseAdded.emit(course);
    CoursesService.staticEmitNewCourse.emit(course);
  }

}

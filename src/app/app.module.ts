import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesModule } from './courses/courses.module';
import { CreateCourseModule } from './create-course/create-course.module';
import { LogService } from './shared/log.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoursesModule,
    CreateCourseModule
  ],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }

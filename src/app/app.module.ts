import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule} from 'angularfire2/database'
import {ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { ErrorComponent } from './error/error.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { CoursesService } from './courses.service';
import { CoursesListComponent } from './courses-list/courses-list.component';
import { LessonsComponent } from './lessons/lessons.component';
import { LessonsListComponent } from './lessons-list/lessons-list.component';
import { LessonsService } from './lessons/lessons.service';
import { TopMenuComponent } from './top-menu/top-menu.component';
import { Courses2Component } from './courses2/courses2.component';
import { Courses2ListComponent } from './courses2-list/courses2-list.component';
import { Courses2Service } from './courses2.service';
import { Course2DetailComponent } from './course2-detail/course2-detail.component';
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';

const firebaseConfig = {
  apiKey: "AIzaSyDJrv0vSJ2xv3wBOn2w0-jz2OT6BVUYLrs",
  authDomain: "safa-shah.firebaseapp.com",
  databaseURL: "https://safa-shah.firebaseio.com",
  projectId: "safa-shah",
  storageBucket: "safa-shah.appspot.com",
  messagingSenderId: "952428475848"
};
@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    ErrorComponent,
    EditCourseComponent,
    CoursesListComponent,
    LessonsComponent,
    LessonsListComponent,
    TopMenuComponent,
    Courses2Component,
    Courses2ListComponent,
    Course2DetailComponent,
    LessonDetailComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    CoursesService,
    LessonsService,
    Courses2Service
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

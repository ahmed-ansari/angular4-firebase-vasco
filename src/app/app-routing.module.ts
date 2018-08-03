import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { ErrorComponent } from './error/error.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { LessonsComponent } from './lessons/lessons.component';
import { Courses2Component } from './courses2/courses2.component';
import { Course2DetailComponent } from './course2-detail/course2-detail.component';
import { LessonDetailComponent } from './lesson-detail/lesson-detail.component';

const routes: Routes = [
  {path:'edit-course/:id',component: EditCourseComponent},
  {path:'courses',component: CoursesComponent},
  {path:'courses2',component: Courses2Component},
  {path:'courses2/:id',component: Course2DetailComponent},
  {path:'lessons/:id',component: LessonDetailComponent},
  {path:'lessons',component: LessonsComponent},
  {path:'',pathMatch:'full',redirectTo:'courses'},
  {path:'**',component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

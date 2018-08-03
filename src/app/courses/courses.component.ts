import { Component, OnInit } from '@angular/core';

import {  Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { message } from '../../environments/interface';
import { CoursesService } from '../courses.service';
@Component({
  selector: 'fire-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  
  courses$: FirebaseListObservable<message[]>
  constructor(private route: Router,private courseService: CoursesService) { }

  ngOnInit() {
   this.getCourses();
    
  }
  editCourse(course:message) {
    return this.route.navigate(['edit-course',course.$key])
  }
  deleteCourse(course: message) {
    this.courseService.deleteCourse(course)
  }
  getCourses() {
    this.courses$ = this.courseService.getCourses()
  }

  addCourse() {
    this.route.navigate(['edit-course',0])
  }

}

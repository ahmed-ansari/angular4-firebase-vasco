import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Courses2Service } from '../courses2.service';
import { Course } from '../../environments/interface';

@Component({
  selector: 'fire-courses2',
  templateUrl: './courses2.component.html',
  styleUrls: ['./courses2.component.css']
})
export class Courses2Component implements OnInit {

  courses: Course[];
  constructor(private course2Service: Courses2Service) { }

  ngOnInit() {
     this.course2Service.findAllCourses().subscribe(
       courses => this.courses = courses
     )
  }

}

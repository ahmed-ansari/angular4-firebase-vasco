import { Component, OnInit } from '@angular/core';
import { Courses2Service } from '../courses2.service';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { Lesson, Course } from '../../environments/interface';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'fire-course2-detail',
  templateUrl: './course2-detail.component.html',
  styleUrls: ['./course2-detail.component.css']
})
export class Course2DetailComponent implements OnInit {
  lessons$:Observable<Lesson[]>;
  Course$: Observable<Course>
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private courseService: Courses2Service
  ) { }

  ngOnInit() {
    const url =  this.route.snapshot.params['id'];
    console.log(url);
    this.Course$ = this.courseService.findCourseByUrl(url);
    this.lessons$ =  this.courseService.findAllLessonsForCourse(url,{
      query: {
        limitToFirst : 3
      }
    })
  }

  theLesson(lesson:Lesson){
    this.router.navigate(['lessons',lesson.$key])
    console.log('received with thanks',lesson);
  }

}

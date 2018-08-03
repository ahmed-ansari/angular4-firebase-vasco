import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute } from '../../../node_modules/@angular/router';
import { CoursesService } from '../courses.service';
import { Router } from '@angular/router';
import { FirebaseListObservable } from 'angularfire2/database';
import { message } from '../../environments/interface';
import { Observable } from 'rxjs/Observable';
import {of} from 'rxjs/observable/of'

@Component({
  selector: 'fire-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css']
})
export class EditCourseComponent implements OnInit {

  courseForm: FormGroup;
  isNew:boolean;
  id:string;
  course$: FirebaseListObservable<message> | Observable<string>;
  course:message;
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private courseService: CoursesService,
              private router: Router) { }

  ngOnInit() {
    this.id =  this.route.snapshot.params['id']
    this.isNew = this.id == '0' ? true : false;

    // console.log(this.isNew,this.id)
    
    this.courseForm = this.fb.group(
      {text: ['',Validators.required ]}
    )

    !this.isNew ? this.getCourse() : '';
    
  }

  getCourse() {
    console.log('get course',this.isNew,this.id);
    this.courseService.getCourse(this.id)
    .subscribe(course => {
      this.course = course;
       console.log('in',course);
        
    this.courseForm.patchValue(this.course)
      });
  }

  onSubmit() {
    console.log('isNew',this.courseForm)
    if (!this.courseForm.invalid) {
      let text =  this.courseForm.value.text;
    this.course = this.isNew ? {} as message : Object.assign(this.course,{text});
      console.log('course',this.course);
      console.log('text',text);
      const save = this.isNew ? this.courseService.addCourse({text}) : this.courseService.updateCourse(this.course);
      save.then( _ => {
        console.log('in comp');
        this.router.navigate(['courses']);
      })
    }
  
    


  }

}

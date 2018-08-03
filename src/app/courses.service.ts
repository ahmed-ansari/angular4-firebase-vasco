import { Injectable } from '@angular/core';
import {AngularFireDatabase,FirebaseListObservable} from 'angularfire2/database'
import { message } from '../environments/interface';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class CoursesService {

 

  courses$:FirebaseListObservable<message[]>;
  // courses$:Observable<message[]>;

  constructor(private af: AngularFireDatabase) {
    this.courses$ = this.af.list('messages')
   }

  getCourses() {
    return this.courses$;
  }



  getCourse(id:string)  {
   return this.af.object(`messages/${id}`);
  }

  addCourse(course: message) {
    console.log('insert',course);
    return this.courses$.push(course)
          .then(_ => console.log('successfully save'));
  }

  deleteCourse(course:message) {
    return this.courses$.remove(course.$key);
  }

  updateCourse(course: message) {
    console.log('update',course);
    return this.courses$.update(course.$key, course);
  }

}

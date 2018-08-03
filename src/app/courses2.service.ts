import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { combineLatest } from 'rxjs/observable/combineLatest';
import { tap } from 'rxjs/operators/tap';
import { switchMap } from 'rxjs/operators/switchMap';
import { Lesson, Course } from '../environments/interface';
// import { switchMap } from 'rxjs/operators/switchMap';
import { map } from 'rxjs/operators/map';
// import { combineLatest } from 'rxjs/operators/combineLatest';
import { mergeMap } from 'rxjs/operators/mergeMap';
import { FirebaseListFactoryOpts } from '../../node_modules/angularfire2/interfaces';


@Injectable()
export class Courses2Service {

  constructor(private af: AngularFireDatabase) { }

    findAllCourses(): Observable<Lesson[]> {
      return this.af.list('courses')
      .pipe(
        map( courses => Course.fromJSONList(courses))
      )
    }

    findCourseByUrl(url: string) : Observable<Course> {
      return this.af.list('courses',{
        query: {
          orderByChild:'url',
          equalTo:url
        }
      })
      .pipe(
        // tap(
        //   // courses => console.log
        // ),
        map( courses => courses[0])
      )
    }

    findAllLessonsForCourse(url: string, query: FirebaseListFactoryOpts ={}) :Observable<Lesson[]> {
      const $course = this.findCourseByUrl(url);
      const $lessonsPerCourse = $course.pipe(
          switchMap(course => this.af.list('lessonsPerCourse/'+course.$key, query)),
          tap(console.log)
        )
      const $lessons$ = $lessonsPerCourse
      .pipe(
        // map(lspc => lspc.map(ls => 'hi')),
      map(lspc => lspc.map(ls => this.af.object('lessons/'+ ls.$key))),
      tap(console.log),
      mergeMap(fblspc => combineLatest(fblspc)),
      tap(console.log)
      
      );
      // $lessons$.subscribe()
      return $lessons$;
      // $courses.subscribe()
    }
}


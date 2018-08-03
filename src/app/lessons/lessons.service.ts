import { Injectable } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database'
import { Observable } from 'rxjs/Observable';
import { Lesson } from '../../environments/interface';
import { map } from 'rxjs/operators/map'
@Injectable()
export class LessonsService {

  constructor( private af: AngularFireDatabase) { }

  fetchLessons() : Observable<Lesson[]> {
    return this.af.list('lessons').pipe(
      map( lessons => Lesson.fromJSONList(lessons))
    );
  }
}

import { Component, OnInit } from '@angular/core';
import { LessonsService } from './lessons.service';
import { Lesson } from '../../environments/interface';

@Component({
  selector: 'fire-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.css']
})
export class LessonsComponent implements OnInit {

  lessons:Lesson[];
  filtered: Lesson[];
  constructor(private lessonsService: LessonsService) { }

  ngOnInit() {
    this.lessonsService.fetchLessons()
    .pipe(
      
    )
    .subscribe(
      lessons => this.lessons = this.filtered =lessons
    )
  }

  doSearch(filterBy: string) {
    this.filtered = this.lessons.filter( lesson => {
      return lesson.description.includes(filterBy)
    })
  }

  theLesson(lesson) {
    console.log('clicked', lesson);
  }

  

}

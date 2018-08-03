import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Lesson } from '../../environments/interface';


@Component({
  selector: 'fire-lessons-list',
  templateUrl: './lessons-list.component.html',
  styleUrls: ['./lessons-list.component.css']
})
export class LessonsListComponent implements OnInit {

  @Input() lessons:Lesson[];
  @Output() lessonClicked:EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {
  }

  viewLesson(lesson: Lesson) {
    console.log('first',lesson);
    this.lessonClicked.emit(lesson);
  }

}

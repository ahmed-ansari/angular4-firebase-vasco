import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../environments/interface';

@Component({
  selector: 'fire-courses2-list',
  templateUrl: './courses2-list.component.html',
  styleUrls: ['./courses2-list.component.css']
})
export class Courses2ListComponent implements OnInit {
  @Input() courses:Course[];
  constructor() { }

  ngOnInit() {
  }

}

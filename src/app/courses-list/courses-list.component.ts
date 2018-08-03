import { Component, OnInit, Input } from '@angular/core';
import { message } from '../../environments/interface';

@Component({
  selector: 'fire-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent implements OnInit {

    @Input() courses : message[];
  constructor() { }

  ngOnInit() {
  }

}

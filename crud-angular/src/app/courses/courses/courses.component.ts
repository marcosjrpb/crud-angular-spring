import { Course } from './../model/course';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit{
  courses:Course[] = [

    { _id:'1', name:'Angular', category: 'front-end' },
    { _id:'2', name:'Java', category: 'front-end' },
    { _id:'2', name:'Spring', category: 'front-end' }
  ];
  displayedColumns = ['name','category'];

  constructor(){}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}

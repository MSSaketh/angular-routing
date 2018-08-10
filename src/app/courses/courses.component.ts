import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses = [
    {"id":1, "name":"Angular"},
    {"id":2, "name":"Spring"},
    {"id":3, "name":"HTML"}
  ];

  constructor(private router:Router) { }

  onSelect(course){
    this.router.navigate(['/courses', course.id]);
  }

  ngOnInit() {
  }

}

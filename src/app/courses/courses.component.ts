import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public selectId;

  courses = [
    {"id":1, "name":"Angular"},
    {"id":2, "name":"Spring"},
    {"id":3, "name":"HTML"}
  ];

  constructor(private router:Router, private route:ActivatedRoute) { }

  onSelect(course){
    this.router.navigate(['/courses', course.id]);
  }

  isSelect(course){
    return course.id === this.selectId;
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params:ParamMap)=>
  {
    let id = parseInt(params.get('id'));
    this.selectId = id;

  });
  }

}

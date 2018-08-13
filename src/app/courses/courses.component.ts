import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  public selectId;

  courses = [];

  constructor(private router: Router, private route: ActivatedRoute, private courseService: CoursesService) { }

  onSelect(course){
    // this.router.navigate(['/courses', course.id]);
    this.router.navigate([course.id], {relativeTo: this.route});
  }

  isSelect(course){
    return course.id === this.selectId;
  }

  ngOnInit() {
    this.courseService.getCourses().subscribe(data => {this.courses = data; });
    this.route.paramMap.subscribe((params: ParamMap) => {
    // tslint:disable-next-line:radix
    const id = parseInt(params.get('id'));
    this.selectId = id;

  });
  }

}

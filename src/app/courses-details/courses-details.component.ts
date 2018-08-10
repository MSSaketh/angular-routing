import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  templateUrl: './courses-details.component.html',
  styleUrls: ['./courses-details.component.css']
})
export class CoursesDetailsComponent implements OnInit {
  public courseId;

  constructor(private route : ActivatedRoute, private router:Router) { }

  ngOnInit() {
    // let id = this.route.snapshot.params['id'];
    // this.courseId = id;
    this.route.paramMap.subscribe((params:ParamMap)=>
  {
    let id = parseInt(params.get('id'));
    this.courseId = id;

  });
  }

  goPrevious(){
    let previousId = this.courseId - 1;
    this.router.navigate(['/courses', previousId]);
  }

  goNext(){
    let nextId = this.courseId + 1;
    this.router.navigate(['/courses', nextId]);
  }

  gotoCourses(){
    let selectId = this.courseId ? this.courseId:null;
    this.router.navigate(['/courses',{id:selectId}]);
  }

}

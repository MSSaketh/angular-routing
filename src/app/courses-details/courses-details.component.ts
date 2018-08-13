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
    this.route.paramMap.subscribe((params: ParamMap) =>
  {
    // tslint:disable-next-line:radix
    let id = parseInt(params.get('id'));
    this.courseId = id;

  });
  }

  goPrevious(){
    let previousId = this.courseId - 1;
    // this.router.navigate(['/courses-list', previousId]);
    this.router.navigate(['../', previousId], {relativeTo:this.route});
  }

  goNext(){
    let nextId = this.courseId + 1;
    // this.router.navigate(['/courses-list', nextId]);
    this.router.navigate(['../', nextId], {relativeTo:this.route});
  }

  gotoCourses(){
    let selectId = this.courseId ? this.courseId:null;
    // this.router.navigate(['/courses',{id:selectId}]);
    this.router.navigate(['../', {id:selectId}], {relativeTo:this.route});
  }

  showOverview(){
    this.router.navigate(['overview'], {relativeTo:this.route});
  }

  showContact(){
    this.router.navigate(['contact'], {relativeTo:this.route});
  }

}

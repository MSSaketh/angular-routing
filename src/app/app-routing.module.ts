import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { CourseOverviewComponent } from './course-overview/course-overview.component';
import { CourseContactComponent } from './course-contact/course-contact.component';

const routes: Routes = [
    {path: 'courses-list', component: CoursesComponent},
    {path: 'courses-list/:id',
     component: CoursesDetailsComponent,
     children:[
        {path: 'overview', component: CourseOverviewComponent},
        {path: 'contact', component: CourseContactComponent}
     ]}
];

@NgModule({
    imports: [
      RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
  })
  export class AppRoutingModule { }
  export const routingComponents = [CoursesComponent, CoursesDetailsComponent, CourseOverviewComponent, CourseContactComponent]

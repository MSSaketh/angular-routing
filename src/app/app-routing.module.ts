import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';

const routes: Routes = [
    {path: 'courses', component: CoursesComponent},
    {path: 'courses/:id', component: CoursesDetailsComponent}
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
  export const routingComponents = [CoursesComponent, CoursesDetailsComponent]

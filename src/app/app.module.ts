import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { CourseOverviewComponent } from './course-overview/course-overview.component';
import { CourseContactComponent } from './course-contact/course-contact.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    CoursesDetailsComponent,
    CourseOverviewComponent,
    CourseContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { CourseOverviewComponent } from './course-overview/course-overview.component';
import { CourseContactComponent } from './course-contact/course-contact.component';
import { CoursesService } from './courses.service';
import { HttpClientModule } from '@angular/common/http';


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
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

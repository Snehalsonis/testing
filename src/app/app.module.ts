import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors/authors.service';
import { AutoGrowDirective } from './autogrow.directive';
// Import new directive
import { UnderlineDirective } from './underline.directive';
import { HighlightDirective } from './highlight.directive';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    AuthorsComponent,
    AutoGrowDirective,
    UnderlineDirective,
    HighlightDirective,
    NotFoundComponent,
    HomeComponent,
    NavBarComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      path : '',
      component: HomeComponent
    },
    {
      path : 'course',
      component: CourseComponent
    },
    {
      path : 'authors',
      component: AuthorsComponent
    },
    {
      path : 'courses',
      component: CoursesComponent
    },
    {
      path : '**', // this will catch path in the browser url
      component: NotFoundComponent
    }
      
    ])
  ],
  
  providers: [CoursesService, AuthorsService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

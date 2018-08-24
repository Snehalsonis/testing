import {Component} from '@angular/core';
import {CoursesService} from './courses.service'
@Component ({
    selector: 'courses', // this is a css selector
    template: `<h2>{{title}}</h2>
    <ul *ngFor= " let course of courses">
    <li>{{course}}</li>
    </ul> 
    `,
    providers: [CoursesService]
})

export class CoursesComponent {
    title: string = "List of courses";
    courses;
    constructor(service: CoursesService ) {
        this.courses = service.getCourse();
    }
}
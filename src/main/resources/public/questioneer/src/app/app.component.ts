import { Component, OnInit } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { Location } from '@angular/common';
import { SurveysComponent } from './+surveys';
import { SurveyComponent } from './+survey';

@Component({
  moduleId: module.id,
  selector: 'questioneer-app',
  template: require('./app.component.html'),
  styles: [require('./app.component.css')],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/surveys', component: SurveysComponent},
  {path: '/survey/:id', component: SurveyComponent}
])
export class AppComponent implements OnInit{
  constructor(public router: Router, private location:Location) {}
  ngOnInit() {
    this.router.navigate(['/surveys']);
  }
  isActive(segment): boolean {
    return this.location.path().endsWith(segment);
  }
}

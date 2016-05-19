import { Component, OnInit } from '@angular/core';
import { Routes, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { SurveysComponent } from './+surveys';
import { SurveyComponent } from './+survey';

@Component({
  moduleId: module.id,
  selector: 'questioneer-app',
  templateUrl: 'questioneer.component.html',
  styleUrls: ['questioneer.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/surveys', component: SurveysComponent},
  {path: '/survey/:name', component: SurveyComponent}
])
export class QuestioneerAppComponent implements OnInit{
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.navigate(['/surveys']);
  }
}

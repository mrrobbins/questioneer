import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Survey } from '../survey';
import { SurveyService } from '../survey.service';

@Component({
  moduleId: module.id,
  selector: 'app-surveys',
  template: require('./surveys.component.html'),
  styles: [require('./surveys.component.css')],
  directives: [],
  providers: [SurveyService]
})
export class SurveysComponent implements OnInit {

  private surveys: Survey[];

  constructor(private router: Router, private surveyService: SurveyService) {}

  ngOnInit() {
    this.surveyService.getSurveys().then(surveys => this.surveys = surveys);
  }

  goSurvey(survey: Survey) {
    this.router.navigate(['/survey', survey.id]);
  }

}

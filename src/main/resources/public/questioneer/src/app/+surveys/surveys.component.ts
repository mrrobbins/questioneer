import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Survey } from '../survey';
import { SurveyService } from '../survey.service';

@Component({
  moduleId: module.id,
  selector: 'app-surveys',
  templateUrl: 'surveys.component.html',
  styleUrls: ['surveys.component.css'],
  directives: [],
  providers: [SurveyService]
})
export class SurveysComponent implements OnInit {

  private surveys: Survey[];

  constructor(private router: Router, private surveyService: SurveyService) {}

  ngOnInit() {
    this.surveys = this.surveyService.getSurveys();
  }

  navigateSurvey() {
    this.router.navigate(['/survey', 'who-we-are']);
  }

}

import { Component, OnInit } from '@angular/core';
import { RouteSegment } from '@angular/router';
import { Survey } from "../survey";
import { SurveyService } from "../survey.service";

@Component({
  moduleId: module.id,
  selector: 'app-survey',
  templateUrl: 'survey.component.html',
  styleUrls: ['survey.component.css'],
  providers: [SurveyService]
})
export class SurveyComponent implements OnInit {
  private survey: Survey;
  constructor(private surveyService: SurveyService, private currentSegment: RouteSegment) {}

  ngOnInit() {
    var surveyId: number = +this.currentSegment.getParam('id');
    this.surveyService.getSurvey(surveyId).then(survey => this.survey = survey);
  }

}

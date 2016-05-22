import { Component, OnInit } from '@angular/core';
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
  constructor(private surveyService: SurveyService) {}

  ngOnInit() {
    this.survey = this.surveyService.getSurveys()[0];
  }

}

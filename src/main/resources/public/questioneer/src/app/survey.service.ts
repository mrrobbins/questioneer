import { Injectable } from '@angular/core';
import { Survey } from './survey';
import { SURVEYS } from './mock-surveys';

@Injectable()
export class SurveyService {
  getSurveys(): Survey[] {
    return SURVEYS;
  }
}

import { Injectable } from '@angular/core';
import { Survey } from './survey';
import { SURVEYS } from './mock-surveys';

@Injectable()
export class SurveyService {
  getSurveys(): Promise<Survey[]> {
    return Promise.resolve(SURVEYS);
  }
  getSurvey(id: number): Promise<Survey> {
    return Promise.resolve(SURVEYS[id-1]);
  }
}

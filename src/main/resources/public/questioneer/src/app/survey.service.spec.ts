import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { SurveyService } from './survey.service';

describe('Survey Service', () => {
  beforeEachProviders(() => [SurveyService]);

  it('should ...',
      inject([SurveyService], (service: SurveyService) => {
    expect(service).toBeTruthy();
  }));
});

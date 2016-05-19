import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { QuestioneerAppComponent } from '../app/questioneer.component';

beforeEachProviders(() => [QuestioneerAppComponent]);

describe('App: Questioneer', () => {
  it('should create the app',
      inject([QuestioneerAppComponent], (app: QuestioneerAppComponent) => {
    expect(app).toBeTruthy();
  }));
});

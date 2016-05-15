import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { SpringNgFoundationAppComponent } from '../app/spring-ng-foundation.component';

beforeEachProviders(() => [SpringNgFoundationAppComponent]);

describe('App: SpringNgFoundation', () => {
  it('should create the app',
      inject([SpringNgFoundationAppComponent], (app: SpringNgFoundationAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'spring-ng-foundation works!\'',
      inject([SpringNgFoundationAppComponent], (app: SpringNgFoundationAppComponent) => {
    expect(app.title).toEqual('spring-ng-foundation works!');
  }));
});

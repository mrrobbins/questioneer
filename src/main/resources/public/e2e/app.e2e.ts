import { SpringNgFoundationPage } from './app.po';

describe('spring-ng-foundation App', function() {
  let page: SpringNgFoundationPage;

  beforeEach(() => {
    page = new SpringNgFoundationPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('spring-ng-foundation works!');
  });
});

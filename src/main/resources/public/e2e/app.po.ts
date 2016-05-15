export class SpringNgFoundationPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('spring-ng-foundation-app h1')).getText();
  }
}

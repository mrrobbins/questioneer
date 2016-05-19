export class QuestioneerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('questioneer-app h1')).getText();
  }
}

import { QuestioneerPage } from './app.po';

describe('questioneer App', function() {
  let page: QuestioneerPage;

  beforeEach(() => {
    page = new QuestioneerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('questioneer works!');
  });
});

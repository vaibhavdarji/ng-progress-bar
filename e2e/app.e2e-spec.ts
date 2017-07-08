import { ProgressBarsPage } from './app.po';

describe('progress-bars App', () => {
  let page: ProgressBarsPage;

  beforeEach(() => {
    page = new ProgressBarsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

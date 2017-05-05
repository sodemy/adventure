import { SassTrialProjectPage } from './app.po';

describe('sass-trial-project App', () => {
  let page: SassTrialProjectPage;

  beforeEach(() => {
    page = new SassTrialProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

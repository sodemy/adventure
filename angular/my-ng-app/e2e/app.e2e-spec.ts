import { MyNgAppPage } from './app.po';

describe('my-ng-app App', () => {
  let page: MyNgAppPage;

  beforeEach(() => {
    page = new MyNgAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

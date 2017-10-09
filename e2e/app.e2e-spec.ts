import { FolWebPage } from './app.po';

describe('fol-web App', () => {
  let page: FolWebPage;

  beforeEach(() => {
    page = new FolWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fol works!');
  });
});

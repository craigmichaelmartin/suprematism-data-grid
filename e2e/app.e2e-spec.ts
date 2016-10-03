import { AtpGridPage } from './app.po';

describe('atp-grid App', function() {
  let page: AtpGridPage;

  beforeEach(() => {
    page = new AtpGridPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

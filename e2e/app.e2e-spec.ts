import { TourismPage } from './app.po';

describe('tourism App', () => {
  let page: TourismPage;

  beforeEach(() => {
    page = new TourismPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

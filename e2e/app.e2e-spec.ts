import { MaterialSamplePage } from './app.po';

describe('material-sample App', () => {
  let page: MaterialSamplePage;

  beforeEach(() => {
    page = new MaterialSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

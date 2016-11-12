import { NgbxComponentsPage } from './app.po';

describe('ngbx-components App', function() {
  let page: NgbxComponentsPage;

  beforeEach(() => {
    page = new NgbxComponentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

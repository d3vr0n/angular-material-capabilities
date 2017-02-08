import { AngularMaterialCapabilitiesPage } from './app.po';

describe('angular-material-capabilities App', function() {
  let page: AngularMaterialCapabilitiesPage;

  beforeEach(() => {
    page = new AngularMaterialCapabilitiesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

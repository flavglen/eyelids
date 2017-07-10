import { EyelidsPage } from './app.po';

describe('eyelids App', () => {
  let page: EyelidsPage;

  beforeEach(() => {
    page = new EyelidsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});

import { browser, element, by } from 'protractor';

export class FolWebPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fol-root h1')).getText();
  }
}

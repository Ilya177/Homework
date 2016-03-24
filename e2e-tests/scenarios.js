'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('my app', function() {


  it('should automatically redirect to /task1 when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/task1");
  });


  describe('task1', function() {

    beforeEach(function() {
      browser.get('index.html#/task1');
    });


    it('should render task1 when user navigates to /task1', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for task 1/);
    });

  });


  describe('task2', function() {

    beforeEach(function() {
      browser.get('index.html#/task2');
    });


    it('should render task2 when user navigates to /task2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for task 2/);
    });

  });


  describe('task3', function() {

    beforeEach(function() {
      browser.get('index.html#/task3');
    });


    it('should render task2 when user navigates to /task3', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for task 3/);
    });

  });
});

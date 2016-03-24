'use strict';

describe('myApp.task1 module', function() {

  beforeEach(module('myApp.task1'));

  describe('task1 controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var task1Ctrl = $controller('Task1Ctrl');
      expect(task1Ctrl).toBeDefined();
    }));

  });
});

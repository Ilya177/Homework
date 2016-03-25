'use strict';

describe('myApp.cat module', function() {

  beforeEach(module('myApp.cat'));

  describe('cat controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var CatCtrl = $controller('CatCtrl');
      expect(catCtrl).toBeDefined();
    }));

  });
});

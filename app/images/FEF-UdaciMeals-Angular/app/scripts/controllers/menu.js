'use strict';

/**
 * @ngdoc function
 * @name udaciMealsAngularApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the udaciMealsAngularApp
 */
angular.module('udaciMealsAngularApp')
  .controller('MenuCtrl', function (foodFinder, orderManager) {
    var _this = this;
    foodFinder.getMenu().then(
      function(data) {
	_this.items = data;
      }
    );

    this.chooseItem = function(menuCategory, menuItemName) {
      orderManager.chooseMenuOption(menuCategory, menuItemName);
    };
  });

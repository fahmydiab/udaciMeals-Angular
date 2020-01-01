
'use strict';

/**
 * @ngdoc function
 * @name udaciMealsAngularApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the udaciMealsAngularApp
 */
angular.module('udaciMealsApp')
  .controller('MenuCtrl', function(foodFinder, orderManager) {
    var _this = this;
    foodFinder.getMenu().then(
      function(data) {
        _this.items = data;
      }
    );
    this.increment = function(item) {
      item.rating = ((item.rating * 10) + 1) / 10;
    }
    this.decrement = function(item) {
      item.rating = ((item.rating * 10) - 1) / 10;
    };

    this.chooseItem = function(menuCategory, menuItemName) {
      orderManager.chooseMenuOption(menuCategory, menuItemName);
    };
  });

'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:OrderCtrl
 * @description
 * # OrderCtrl
 * Controller of the udaciMealsApp
 */
angular.module('udaciMealsApp')
.controller('OrderCtrl', function (orderManager) {
  this.active = orderManager.getSelectedDay();

  this.setActiveDay = function(day) {
    this.active = day;
    orderManager.setActiveDay(day);
  };

  this.remove = function(day, menuCategory) {
    orderManager.removeMenuOption(day, menuCategory);
  };

  this.list = orderManager.getOrders();
});

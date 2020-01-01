'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:ItemCtrl
 * @description
 * # ItemCtrl
 * Controller of the udaciMealsApp
 */
angular.module('udaciMealsApp')
  .controller('ItemCtrl',function ($stateParams,foodFinder) {
    var _this = this;
    foodFinder.getItem($stateParams.id).then(function (data) {
      _this.data = data;
    });
  });

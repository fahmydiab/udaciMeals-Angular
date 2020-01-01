'use strict';

/**
 * @ngdoc function
 * @name udaciMealsAngularApp.controller:ItemCtrl
 * @description
 * # ItemCtrl
 * Controller of the udaciMealsAngularApp
 */
angular.module('udaciMealsAngularApp')
  .controller('ItemCtrl', function ($stateParams, foodFinder) {
    var _this = this;
    foodFinder.getItem($stateParams.id).then(function(data) {
      _this.data = data;
    });
  });

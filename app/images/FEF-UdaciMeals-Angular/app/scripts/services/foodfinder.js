/*global $:false */
/*jshint unused:false*/
'use strict';

/**
 * @ngdoc service
 * @name udaciMealsAngularApp.foodFinder
 * @description
 * # foodFinder
 * Service in the udaciMealsAngularApp.
 */
angular.module('udaciMealsAngularApp')
  .service('foodFinder', function () {
    this.getMenu = function() {
      return $.get( '/menu/menu.json' );
    };

    this.getItem = function(id) {
      var menuItemFile = '/menu/' + id + '.json';
      return $.get( menuItemFile );
    };
  });

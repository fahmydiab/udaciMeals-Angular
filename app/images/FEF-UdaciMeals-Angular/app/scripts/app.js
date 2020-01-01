'use strict';

/**
 * @ngdoc overview
 * @name udaciMealsAngularApp
 * @description
 * # udaciMealsAngularApp
 *
 * Main module of the application.
 */
angular
  .module('udaciMealsAngularApp', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
	url: '/',
	templateUrl: 'views/menu.html',
	controller: 'MenuCtrl as menu'
      })
      .state('item', {
	url: '/menu/item/:id',
	templateUrl: 'views/item.html',
	controller: 'ItemCtrl as item'
      })
      .state('item.nutrition', {
	url: '/nutrition',
	templateUrl: 'views/item-nutrition.html'
      })
      .state('item.reviews', {
	url: '/reviews',
	templateUrl: 'views/item-reviews.html'
      });
  });

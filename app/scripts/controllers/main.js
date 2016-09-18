'use strict';

/**
 * @ngdoc function
 * @name nerdreflexApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nerdreflexApp
 */
angular.module('nerdreflexApp')
  .controller('MainCtrl',['$scope', '$rootScope', '$route', function ($scope, $rootScope, $route) {
    var self = this;

    $rootScope.$on('$routeChangeStart', function(event, currRoute, prevRoute){
        $rootScope.animation = currRoute.animation;

    });
    $rootScope.$on("$routeChangeSuccess", function(currentRoute, previousRoute){
        //Change page title, based on Route information
        $rootScope.title = $route.current.title;
        if($rootScope.title == 'Sets')
        {
            $scope.showMixes = true;
        }else
        {
            $scope.showMixes = false;
        }
    });
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

  }]);

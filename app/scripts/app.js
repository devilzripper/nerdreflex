'use strict';

/**
 * @ngdoc overview
 * @name nerdreflexApp
 * @description
 * # nerdreflexApp
 *
 * Main module of the application.
 */
angular
    .module('nerdreflexApp', [
    'ngAnimate',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'angular-loading-bar',
    'angular-fotorama',
    '720kb.socialshare',
    'materialCalendar'
])
    .config(['$routeProvider', 'cfpLoadingBarProvider', 'socialshareConfProvider', function ($routeProvider, cfpLoadingBarProvider, socialshareConfProvider) {
    $routeProvider
        .when('/', {
            templateUrl:'views/main.html',
            title:'Home',
            animation:'third'
        })
        .when('/about', {
            templateUrl:'views/about.html',
            controller:'AboutCtrl',
            controllerAs:'about',
            animation:'third',
            title:'About'
        })
        .when('/gallery', {
            templateUrl:'views/gallery.html',
            controller:'GalleryCtrl',
            controllerAs:'gallery',
            animation:'third',
            title:'Gallery'
        })
        .when('/sets', {
            templateUrl:'views/sets.html',
            controller:'SetsCtrl',
            controllerAs:'sets',
            animation:'third',
            title:'Sets'
        })
        .when('/events', {
            templateUrl:'views/events.html',
            controller:'EventsCtrl',
            controllerAs:'events',
            animation:'third',
            title:'Events'
        })
        .when('/biography', {
            templateUrl:'views/biography.html',
            controller:'BiographyCtrl',
            controllerAs:'biography',
            animation:'third',
            title:'Biography'
        })
        .otherwise({
            redirectTo:'/'
        });
    cfpLoadingBarProvider.includeSpinner = true;

    socialshareConfProvider.configure([{
        'provider': 'twitter',
        'conf': {
            'url': 'http://nerdreflex.de',
            'text': 'DJ at the Edge',
            'via': 'npm',
            'hashtags': 'angularjs,socialshare,angular-socialshare',
            'trigger': 'click',
            'popupHeight': 800,
            'popupWidth' : 400
        }
    }]);
}]);

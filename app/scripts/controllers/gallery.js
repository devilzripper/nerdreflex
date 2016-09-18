'use strict';

/**
 * @ngdoc function
 * @name nerdreflexApp.controller:GalleryCtrl
 * @description
 * # GalleryCtrl
 * Controller of the nerdreflexApp
 */
angular.module('nerdreflexApp')
  .controller('GalleryCtrl',['$scope', function ($scope) {
     $scope.fotoArray = [
        {
            "url": "images/content/1.jpg",
            "thumb":"images/content/1.jpg",
            "caption": "Hello",
            "type": "image"
        },
        {
            "url": "images/content/2.jpg",
            "thumb":"images/content/2.jpg",
            "caption": "Thumb should be provided",
            "type": "image"
        },
        {
            "url": "images/content/3.jpg",
            "thumb":"images/content/3.jpg",
            "caption": "",
            "type": "image"
        },
        {
            "url": "images/content/4.jpg",
            "thumb": "images/content/4.jpg",
            "caption": "",
            "type": "image"
        },{
            "url": "images/content/5.jpg",
            "thumb": "images/content/5.jpg",
            "caption": "",
            "type": "image"
        }];
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

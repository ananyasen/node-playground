'use strict';

angular.module('tourApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
      {
        'title': 'Home',
        'link': '/home',
        'hasSecondaryNav': false
      },
      {
        'title': 'Guides',
        'link': '/guides',
        'hasSecondaryNav': true
      },
      {
        'title': 'Destinations',
        'link': '/tours',
        'hasSecondaryNav': true
      },
      {
        'title': 'Themes',
        'link': '/themes',
        'hasSecondaryNav': true
      },
      {
        'title': 'Travelogue',
        'link': '/travelogue',
        'hasSecondaryNav': false
      }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return $location.path().indexOf(route) === 0;
    };


  });

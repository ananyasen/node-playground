/**
 * Created by asen1 on 9/18/15.
 */
'use strict';

angular.module('tourApp')
  .controller('SecondaryNavbarCtrl', function ($scope, $location) {
    $scope.submenu = [
      {
        'title': 'All Tours',
        'link': '/tours/all'
      },
      {
        'title': 'My Favorite Tours',
        'link': '/tours/favorite'
      },
      {
        'title': 'Create Tour',
        'link': '/tours/create'
      }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });

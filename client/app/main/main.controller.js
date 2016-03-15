'use strict';

angular.module('tourApp')
  .controller('MainCtrl', function ($scope, $http, $state, $location) {
    //go to the create tour state
    if($location.path() === "/tours"){
      $state.go('main.create');
    }
  });

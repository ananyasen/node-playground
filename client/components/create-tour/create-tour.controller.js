/**
 * Created by asen1 on 10/7/15.
 */
/**
 * Created by asen1 on 9/18/15.
 */
'use strict';

angular.module('tourApp')
  .controller('CreateTourCtrl', function ($scope, $location, createTourService) {
      $scope.steps = [
        {
          title: "Locations",
          icon:"fa fa-map-marker",
          isCurrent: true,
          hasNext: true
        }
        ,{
          title: "Attractions",
          icon:"fa fa-university",
          isCurrent: false,
          hasNext: true
        }
        ,{
          title: "Guide",
          icon:"fa fa-user",
          isCurrent: false,
          hasNext: true
        }
        ,{
          title: "Review",
          icon:"fa fa-check-square-o",
          isCurrent: false,
          hasNext: false
        }

      ];

    //data from API call
    $scope.categories = {
      "history": {
        title: "Historic Journey",
        key: "history",
        guides: 14,
        locations: 20,
        likes:50
      },
      "religeous": {
        title: "Religeous Retreat",
        key: "religeous",
        guides: 10,
        locations: 20,
        likes:50
      },
      "romantic": {
        title: "Romantic Getaway",
        key: "romantic",
        guides: 6,
        locations: 20,
        likes:50
      },
      "adventurous": {
        title: "Adventurous Exploration",
        key: "adventurous",
        guides: 8,
        locations: 20,
        likes:50
      }
    };

    $scope.theme = $scope.categories.adventurous.title;

    $scope.status = {
      isopen: false
    };

    $scope.selectTheme = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.status.isopen = !$scope.status.isopen;

      var selTheme = $event.target.getAttribute("data-key");
      $scope.theme = $scope.categories[selTheme].title;
    };

    $scope.input = {};
    $scope.input.destination = "";

    $scope.searchForPlaces = function (placeName) {
      var promise = createTourService.searchLocationByCategory(placeName, "", "");
      promise.then(function(data){
          return data.map(function(item){
            return item.formatted_address;
          });

      }).then(function(error){

      });
    };

  });

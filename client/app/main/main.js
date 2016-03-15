'use strict';

angular.module('tourApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main', {
        url: '/tours',
        views: {
          "main": {
            controller: 'MainCtrl',
            templateUrl: 'app/main/main.html'
          }
        },
        data:{
          pageTitle: 'Guided Tours'
        }

      })
      .state('main.create', {
        url: '/create',
        views: {
          "createTour":{
            controller: "CreateTourCtrl",
            templateUrl: "components/create-tour/create-tour.html"
          },
          "createTourNav":{
            controller: "SecondaryNavbarCtrl",
            templateUrl: "components/secondary-navbar/secondary-navbar.html"
          }
        },
        data:{
          pageTitle: 'Create Tour',
          secondaryMenu:"createNewTour"
        }
      })
      //.state('main.favorites', {
      //  url: '/favorites',
      //  views: {
      //    "favorites":{
      //      controller: "FavoriteToursCtrl",
      //      templateUrl: "components/favorite-tour/favorite-tour.html"
      //    }
      //  }
      //
      //})
    ;
  });

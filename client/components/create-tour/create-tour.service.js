/**
 * Created by asen1 on 11/18/15.
 */
"use strict";
angular.module('tourApp')
  .factory('createTourService', function ($rootScope, $http) {

    var url_base =  "http://localhost:9000/api";

    //Search for Places filtered by chosen Tour Category if any
    //username can help to sort by profile
    function _searchLocationByCategory(placeName, category, username){
        var url = url_base + "/places/textsearch";

      var params = {
        "search" : placeName
      }

      return $http({
        method: 'GET',
        url: url,
        params: params
      }).then(
        function (response) {
          return response.data;
        }, function errorCallback(error) {
          console.log("Error while Places text search", error);
        }
      );
    }

    return {
      searchLocationByCategory : _searchLocationByCategory
    }

  }
);

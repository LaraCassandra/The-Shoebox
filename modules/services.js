var services = angular.module("services", [])

// ! LECTURE 6
// ! DOES NOT WORK
app.factory('ShoeService', function($http){

    var service = {};
  
    service.data = {
      shoes: [],
      errorMessage: null
    };
  
    service.getShoes = function(){
      var configuration = {
        method: "GET",
        url: "http://localhost:3333/httpRequest.html"
      };
  
      $http(configuration).then(function(response){
        service.data.shoes = response.data;
      }, function(error){
        service.data.errorMessage = error.status + ": " + error.statusText;
      });
  
    };
  
    return service;
  
  })
var app = angular.module("shoebox", ["ngRoute"]);


// * ADD ROUTES USING ROUTE PROVIDER
app.config(function ($routeProvider) {
  // LANDING ROUTE
  $routeProvider.when("/", {
    templateUrl: "templates/home.html",
  });

  // HOME ROUTE
  $routeProvider.when("/home", {
    templateUrl: "templates/home.html",
  });

  // FOOTWEAR ROUTE
  $routeProvider.when("/footwear", {
    controller: "FootwearController",
    templateUrl: "templates/footwear.html",
  });

  // CONTACT ROUTE
  $routeProvider.when("/contact", {
    controller: "ContactController",
    templateUrl: "templates/contact.html",
  });

  // PRODUCT PAGE ROUTE
  $routeProvider.when("/product/:id", {
    controller: "ProductController",
    templateUrl: "templates/product.html",
  });

});


// * CONTACT CONTROLLER
app.controller("ContactController", function ($scope) {

  // LINK EMAILS FROM DATA.JS
  $scope.emailAddresses = emails;

});


// * FOOTWEAR CONTROLLER
app.controller("FootwearController", function ($scope, $http) {

  // LINK ARRAY OF SHOES FROM DATA.JS
  $scope.shoes = [];
  $scope.errorMessage = null;

  var configuration = {
    method: "GET",
    url: "http://localhost:3333/httpRequest.html"
  };

  var successCallback = function(response){
    $scope.shoes = response.data;
  };

  var failureCallback = function(error){
    $scope.errorMessage = error.status + ": " + error.statusText;
  };

  $http(configuration).then(successCallback, failureCallback);

  if ($scope.shoes === null){
    $scope.errorMessage = "Can't find shoes";
  }

});


// * PRODUCT CONTROLLER 
app.controller("ProductController", function($scope, $routeParams){
  

  // GET ID OF SELECTED SHOE
  var id = $routeParams.id;
  console.log(id);

  // FIND SHOE IN ARRAY BASED ON ID
  $scope.shoeInfo = shoesArray[id - 1];

})
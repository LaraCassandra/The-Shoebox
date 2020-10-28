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
    title: "Home",
  });

  // FOOTWEAR ROUTE
  $routeProvider.when("/footwear", {
    controller: "FootwearController",
    templateUrl: "templates/footwear.html",
    title: "Footwear",
  });

  // CONTACT ROUTE
  $routeProvider.when("/contact", {
    controller: "ContactController",
    templateUrl: "templates/contact.html",
    title: "Contact",
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
app.controller("FootwearController", function ($scope) {

  // LINK ARRAY OF SHOES FROM DATA.JS
  $scope.shoes = shoesArray;

});


// * PRODUCT CONTROLLER 
app.controller("ProductController", function($scope, $routeParams){
  

  // GET ID OF SELECTED SHOE
  var id = $routeParams.id;
  console.log(id);

  // FIND SHOE IN ARRAY BASED ON ID
  $scope.shoeInfo = shoesArray[id - 1];

})
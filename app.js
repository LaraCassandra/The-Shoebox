var app = angular.module("shoebox", ["ngRoute"]);


// * ADD ROUTES USING ROUTE PROVIDER
app.config(function ($routeProvider) {
  
  // LANDING ROUTE
  $routeProvider.when("/", {
    templateUrl: "templates/home.html",
  });

  // HOME ROUTE
  $routeProvider.when("/home", {
    controller: "HomeController",
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


// * HOME CONTROLLER 
app.controller("HomeController", function($scope){

  // LINK SHOES FROM DATA.JS
  $scope.favourites = shoesArray;

})


// * CONTACT CONTROLLER
app.controller("ContactController", function ($scope) {

  // LINK EMAILS FROM DATA.JS
  $scope.contact = contact;

  // LINK COMMENTS FROM DATA.JS
  $scope.comments = comments;

  // ADDING COMMENTS
  $scope.formData = {
    name: "",
    email: "",
    starRating: "5",
    comment: ""
  };

  // PUSH COMMENTS FROM FORM
  $scope.addComment = function(form){

    $scope.comments.push({name: $scope.formData.name, email: $scope.formData.email, starRating: $scope.formData.starRating, comment: $scope.formData.comment})

  };

});


// * FOOTWEAR CONTROLLER
app.controller("FootwearController", function ($scope, $http) {

  // LINK ARRAY OF SHOES FROM DATA.JS
  $scope.shoes = shoesArray;

  // ! DOES NOT WORK
  // $scope.errorMessage = null;

  // var configuration = {
  //   method: "GET",
  //   url: "http://localhost:3333/httpRequest.html"
  // }

  // var successCallback = function(response){
  //   $scope.shoes = response.data;
  // };

  // var failureCallback = function(error){
  //   $scope.errorMessage = error.status + ": " + error.statusText;
  // }

  // $http(configuration).then(successCallback, failureCallback);

  // $http({
  //   method: 'GET',
  //   url: 'http://localhost:3333/httpRequest.html'
  // }).then(function success(response){
  //   $scope.shoes= response.data;
  // }, function error(response){

  // });
  // ! DOES NOT WORK
  
});


// * PRODUCT CONTROLLER 
app.controller("ProductController", function($scope, $routeParams){
  

  // GET ID OF SELECTED SHOE
  var id = $routeParams.id;
  console.log(id);

  // FIND SHOE IN ARRAY BASED ON ID
  $scope.shoeInfo = shoesArray[id - 1];

  // FIND REVIEW BASED ON SHOE ID
  $scope.shoeReviews = reviews;

})
var controllers = angular.module("controllers", [])

// * HOME CONTROLLER 
app.controller("HomeController", function($scope, ShoeService){

    // LINK SHOES FROM DATA.JS
    $scope.favourites = shoesArray;

    // ! LECTURE 6
    // ! DOES NOT WORK
    // $scope.favourites = ShoeService.data.shoes;
    // $scope.errorMessage = ShoeService.data.errorMessage;
  
    // ShoeService.getShoes();
  
    // $scope.$watch(function(){
    //   return ShoeService.data;
    // }, function(newVal){
    //   $scope.favourites = newVal.shoes;
    //   $scope.errorMessage = newVal.errorMessage;
    // }, true);
  
});



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
app.controller("FootwearController", function ($scope, ShoeService) {

    // LINK ARRAY OF SHOES FROM DATA.JS
    $scope.shoes = shoesArray;
  
  // ! LECTURE 6
  // ! DOES NOT WORK
    // $scope.shoes = ShoeService.data.shoes;
    // $scope.errorMessage = ShoeService.data.errorMessage;
  
    // ShoeService.getShoes();
  
    // $scope.$watch(function(){
    //   return ShoeService.data;
    // }, function(newVal){
    //   $scope.shoes = newVal.shoes;
    //   $scope.errorMessage = newVal.errorMessage;
    // }, true);
  
  
    // ! LECTURE 5
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
  
    // REVIEW FORM
    $scope.formdata = {
      name: "",
      starRating: "3",
      comment: "",
      shoeId: id
    }
    
    // PUSH REVIEWS
    $scope.addReview = function(form) {
  
      $scope.shoeReviews.push({name: $scope.formdata.name, shoeId: $scope.formdata.shoeId, starRating: $scope.formdata.starRating, comment: $scope.formdata.comment})
  
    }

    // STAR RATING 
    $scope.starRatingAsInteger = function(review){
      return parseInt(review.starRating);
    }
    
    $scope.starRatingWithinRange = function(index) {
      return (index <= parseInt($scope.formdata.starRating));
      };
    
    $scope.setStarRating = function(index) {
      return $scope.formdata.starRating = index + "";
    };

});

var app = angular.module("shoebox", ["ngRoute"]);

// * ADD ROUTES USING ROUTE PROVIDER
app.config(function ($routeProvider) {

    // LANDING ROUTE 
    $routeProvider.when("/", {
        templateUrl: "templates/home.html"
    });

    // HOME ROUTE
    $routeProvider.when("/home", {
        templateUrl: "templates/home.html"
    });

    // FOOTWEAR ROUTE
    $routeProvider.when("/footwear", {
        controller: "FootwearController",
        templateUrl: "templates/footwear.html"
    });

    // CONTACT ROUTE
    $routeProvider.when("/contact", {
        controller: "ContactController",
        templateUrl: "templates/contact.html"
    });

    // PRODUCT PAGE ROUTE
    $routeProvider.when("/product", {
        templateUrl: "templates/product.html"
    });

});

// * INDEX CONTROLLER
app.controller("IntroductionController", function ($scope) {
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

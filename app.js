var app = angular.module("shoebox", ["ngRoute"]);

// * ADD ROUTES USING ROUTE PROVIDER
app.config(function ($routeProvider) {

    // HOME ROUTE
    $routeProvider.when("/home", {
        templateUrl: "templates/home.html"
    });

    // FOOTWEAR ROUTE
    $routeProvider.when("/footwear", {
        templateUrl: "templates/footwear.html"
    });

    // CONTACT ROUTE
    $routeProvider.when("/contact", {
        controller: "ContactController",
        templateUrl: "templates/contact.html"
    });
});

// * SEND A MESSAGE TO THE HTML 
app.controller("IntroductionController", function ($scope) {
    $scope.message = "Welcome to The Shoe Box"
});

// * CONTACT CONTROLLER 
app.controller("ContactController", function ($scope) {
    $scope.phoneNumbers = ["(012) 333 4444", "(011) 222 5555"];
    $scope.emailAddresses = {
        events: "events@shoebox.co.za",
        feedback: "feedback@shoebox.co.za",
        general: "info@shoebox.co.za"
    }
});

var num = phoneNumbers[i];
var email = emailAddresses[i];
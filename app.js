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
});

// * SEND A MESSAGE TO THE HTML 
app.controller("IntroductionController", function ($scope) {
});

// * CONTACT CONTROLLER 
app.controller("ContactController", function ($scope) {
    $scope.phoneNumbers = ["(012) 333 4444", "(011) 222 5555"];
    $scope.emailAddresses = {
        General: "info@shoebox.co.za",
        Events: "events@shoebox.co.za",
        Feedback: "feedback@shoebox.co.za"
    };

    $scope.shoes = shoesArray;

});

app.controller("FootwearController", function ($scope) {

    $scope.shoes = shoesArray;

});

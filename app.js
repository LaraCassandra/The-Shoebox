var app = angular.module("shoebox", ["ngRoute", "controllers", "directives", "services"]);


// * ADD ROUTES USING ROUTE PROVIDER
app.config(function ($routeProvider) {
  
  // LANDING ROUTE
  $routeProvider.when("/", {
    templateUrl: "templates/home.html",
    controller: "HomeController",
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

  // ABOUT PAGE ROUTE
  $routeProvider.when("/about", {
    templateUrl: "templates/about.html"
  })

});
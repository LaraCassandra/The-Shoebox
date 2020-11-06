var directives = angular.module("directives", [])

// ! LECTURE 6
// ! DOES NOT WORK 
app.directive("shoes", function(){

    var specs = {};
  
    specs.restrict = "E";
    specs.scope = {
      "shoe":"="
    };
  
    specs.templateUrl = "/templates/footwear.html";
  
    return specs;
  
  })
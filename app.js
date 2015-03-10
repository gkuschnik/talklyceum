// $('input:radio').click(function(){
//     $('label#' + $(this).attr('id')).toggleClass('checkedClass'); // checkedClass is defined in your CSS
// });

// (function(){
//   var app = angular.module('talklyceum', []);


//   }]);
// })();


angular.module("talk", [])
  .controller("FormController", function($scope) {
    $scope.myForm = {};

    $scope.myForm.options = [
      { id : "bpo", name: "Buisness Process Outsourcing" }
     ,{ id : "hrm", name: "Hotel & Restaurant Management" }
     ,{ id : "other", name: "Other" }
     ];
  });
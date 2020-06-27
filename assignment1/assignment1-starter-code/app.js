(function(){

  angular.module("LunchCheck",[])

  .controller("LunchCheckController",LunchCheckController);

  $scope.text_input = "";
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope){

  };
})();

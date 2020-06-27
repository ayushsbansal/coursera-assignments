(function(){

  "use strict";

  angular.module("LunchCheck",[])

  .controller("LunchCheckController",LunchCheckController);


  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.text_input = "";
    $scope.message = "";

    var count;
    $scope.countObjects = function(){
        count = countNum($scope.text_input);
        $scope.message = displayMessage(count);
    }


    function countNum(string){
        var res = string.split(",");
        var count = 0;
        for(var i=0;i<res.length;i++){
          if(res[i] !== "")
            count++;
        }
        return count;
    };

    function displayMessage(count)
    {
      var string ;
      if(count==0){        string = "Please enter data first";}
      else if(count <=3)  {
        string ="Enjoy!"; }
      else{
        string =" Too Much!";}
      return string;
    }
  };
})();

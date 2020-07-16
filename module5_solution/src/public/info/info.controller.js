(function(){
  "use strict";

  angular.module('public')
  .controller('InfoController',InfoController);

  InfoController.$inject = ['SignUpService'];

  function InfoController(SignUpService){
    var infoctrl = this;

    infoctrl.data = SignUpService.retrieve();

    if(infoctrl.data === undefined)
      infoctrl.message = "Register yourself please";
    else{
    infoctrl.response = SignUpService.data;
    console.log(infoctrl.response);

  }
  }
})();

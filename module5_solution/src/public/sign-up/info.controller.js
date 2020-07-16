(function(){
  "use strict";

  angular.module('public')
  .controller('InfoController',InfoController);

  InfoController.$inject = ['SignUpService'];

  function InfoController(SignUpService){
    var infoctrl = this;

    infoctrl.data = SignUpService.retrieve();

    console.log(infoctrl.data);
  }
})();

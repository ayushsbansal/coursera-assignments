(function(){
  "use strict";

  angular.module('public')

  .service('SignUpService',SignUpService);

  SignUpService.$inject=['$http','ApiPath']
  function SignUpService($http,ApiPath){
    var service= this;

    service.submit = function(user){
      service.user = user;
    };

    service.ItemsinList = function(shortname){

      var config = {};
      if (shortname) {
        config.params = {'category': shortname};
      }

      return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
        service.data = response.data;
        return response.data;
      });
    }

    service.retrieve = function(){
      return service.user;
    }
    
  }

})();

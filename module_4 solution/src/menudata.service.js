(function(){
  "use strict";

  angular.module('data')
  .service('MenuDataService',MenuDataService);

  MenuDataService.$inject = ['$http'];
  function MenuDataService($http){
    var service = this;

    service.getAllCategories = function(){
      var promise = $http({
        url: 'https://davids-restaurant.herokuapp.com/categories.json',
        method:'GET'
      })

      return promise;
    };

    service.getItemsforCategory= function(shortName){
      var promise= $http({
        url:'https://davids-restaurant.herokuapp.com/menu_items.json',
        params:{
          category:shortName
        }
      })
      return promise;
    };

  }
})();

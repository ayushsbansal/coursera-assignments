
(function(){
  "use strict";

  angular.module("NarrowItDownApp",[])

  .controller('NarrowItDownController',NarrowItDownController)

  .service('MenuSearchService',MenuSearchService)

  .directive('foundItems',FoundItems);

  function FoundItems(){
    var ddo={
      templateUrl: 'shoppingList.html',
      scope:{
        items:'<',
        remove:'&onRemove'
      },
      controller: FoundItemsDirective,
      controllerAs:"dirCtrl",
      bindToController:true
    };

    return ddo;
  }

  function FoundItemsDirective(){
    var dirCtrl= this;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService){
    var ctrl = this;
    ctrl.SearchText = "";

    ctrl.removeItem = function(index){
      MenuSearchService.removeItem(index);
    }

    ctrl.getItems = function(){
      ctrl.found=MenuSearchService.getMatchedMenuItems(ctrl.SearchText);
    };
  }

  MenuSearchService.$inject = ['$http'];
  function MenuSearchService($http){

    var service = this;
    service.sortedItems = [];

    service.getMatchedMenuItems = function(SearchText){
      var promise =  $http({
        url:('https://davids-restaurant.herokuapp.com/menu_items.json'),
        method:"GET"
      })
      promise.then(function(response){
        var items = response.data.menu_items;
        service.SortItemsByDescription(SearchText,items);
      })
      .catch(function(error){
        console.log(error);
      });

      return service.sortedItems;

    };

    service.SortItemsByDescription = function(SearchText,items){
      service.sortedItems.splice(0,service.sortedItems.length);
      for(var i=0;i<items.length;i++){
        if(items[i].description.toLowerCase().indexOf(SearchText) !== -1  && SearchText.trim(" ") !== ""){
          var item = items[i];
          service.sortedItems.push(item);
        }
      }

    };

    service.removeItem = function(index){
      service.sortedItems.splice(index,1);
    }
  }
})();

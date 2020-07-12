(function(){
  "use strict";

  angular.module('MenuApp')
  .controller('ItemsDetailsController',ItemsDetailsController);

  ItemsDetailsController.$inject = ['MenuDataService','listOfItems','categories'];

  function ItemsDetailsController(MenuDataService,listOfItems,categories){
    var itemctrl = this;
/*
  itemctrl.$onInit = function(){
    console.log(MenuDataService.getItemsforCategory($stateParams.shortName));
  } */
    itemctrl.category = listOfItems.data.category.short_name;
    itemctrl.items = listOfItems.data.menu_items;
}

})();

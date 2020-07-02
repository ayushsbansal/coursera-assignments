(function(){
  "use strict";

  angular.module('ShoppingListApp',[])

  .controller('ShoppingListToBuy',ShoppingListToBuy)

  .controller('ShoppingListBought',ShoppingListBought)

  .service('CustomService',CustomService);

  ShoppingListToBuy.$inject = ['CustomService'];
  function ShoppingListToBuy(CustomService){
    var buyList = this;

    buyList.itemsToBuy = CustomService.getItemsToBuy();

    buyList.BuyItem = function(index){
      CustomService.BuyItem(index);
    }


  };

  ShoppingListBought.$inject = ['CustomService'];
  function ShoppingListBought(CustomService){
    var boughtList = this;

    boughtList.itemsBought = CustomService.getItemsBought();

  };

  function CustomService(){
    var service = this;

    var itemsToBuy = [
      {
        name: "Cookies",
        quantity : "10"
      },
      {
        name: "Biscuit",
        quantity : "5"
      },
      {
        name: "Bread",
        quantity :"3"
      },
      {
        name: "Toast",
        quantity:"4"
      },
      {
        name: "Shrewberry",
        quantity:"7"
      }];

    var itemsBought = [];

    service.BuyItem = function(itemIndex){
        var item = itemsToBuy[itemIndex];
        itemsToBuy.splice(itemIndex,1);
        itemsBought.push(item);
    }

    service.getItemsToBuy = function(){
      return itemsToBuy;
    }

    service.getItemsBought = function(){
      return itemsBought;
    }
  }


})();

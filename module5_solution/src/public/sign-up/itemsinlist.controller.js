(function(){
  "use strict";

/*ItemsinListController.$inject = ['itemsinList'];

  function ItemsinListController(itemsinList){ */

    angular.module('public')
    .controller('ItemsinListController',ItemsinListController);

    ItemsinListController.$inject = ['itemsinList','SignUpService'];
    function ItemsinListController(itemsinList,SignUpService){
    var itemsctrl = this;

    itemsctrl.itemsinList = itemsinList;
  }
})();

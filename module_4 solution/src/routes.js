
(function(){
  "use strict";

  angular.module('MenuApp')
  .config(ConfigFunc);

  ConfigFunc.$inject = ['$stateProvider','$urlRouterProvider'];
  function ConfigFunc($stateProvider,$urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state('home',{
      url:'/',
      templateUrl: 'src/templates/home.html'
    })

    .state('categories',{
      url:'/categories',
      templateUrl: 'src/templates/categories.template.html',
      controller:"CategoriesController as ctgyctrl",
      resolve:{
        categories:['MenuDataService',function(MenuDataService){
          return MenuDataService.getAllCategories();
        }]
      }
    })

   .state('categories.itemsState',{
      url:'/items/{shortName}',
      templateUrl: 'src/templates/items.template.html',
      controller:'ItemsDetailsController as itemctrl',
      resolve:{
        listOfItems:['MenuDataService','$stateParams',function(MenuDataService,$stateParams){
          return MenuDataService.getItemsforCategory($stateParams.shortName);
        }]
      }
    })
  }
})();

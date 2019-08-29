(function() {
'use strict';
angular.module('LunchCheck', [])
.controller('lunchCheckController',lunchController);
lunchController.$inject = ['$scope'];

 function lunchController($scope) {

   $scope.getNumOfItems = function(items) {
     var numOfItems = 0;
     if(items)
       numOfItems = getItemsCountWithoutEmpty(items);
     $scope.message = getMessage(numOfItems);
   }

   function getItemsCountWithoutEmpty(items){
     var itemsArr = items.split(',');
     var itemsCount = itemsArr.length;
     for(var i=0;i<=itemsArr.length;i++){
       if(itemsArr[i] == "")
          itemsCount--;
     }
     return itemsCount;
   }

  function getMessage(numOfItems){
     if(numOfItems == 0)
        return "Please enter data first";
     else if(numOfItems!=0 && numOfItems <= 3)
        return "Enjoy!";
    else if(numOfItems!=0 && numOfItems > 3)
        return "Too much!";
   };
   $scope.comment = "**Case where there is no item between some commas is handled.";
}
})();

/*minified Javascript*/
//!function(){"use strict";function n(n){n.getNumOfItems=function(e){var t=0;e&&(t=function(n){for(var e=n.split(","),t=e.length,r=0;r<=e.length;r++)""==e[r]&&t--;return t}(e)),n.message=function(n){if(0==n)return"Please enter data first";if(0!=n&&n<=3)return"Enjoy!";if(0!=n&&n>3)return"Too much!"}(t)}}angular.module("LunchCheck",[]).controller("lunchCheckController",n),n.$inject=["$scope"]}();

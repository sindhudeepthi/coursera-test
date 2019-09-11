(function() {
'use strict';
angular.module('shoppingList', [])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController )
.service('ShoppingListCheckOffService',ShoppingListCheckOffService );

ToBuyController.$inject = ['ShoppingListCheckOffService'];
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

 function ToBuyController(ShoppingListCheckOffService) {
     var itemAdder = this;

     itemAdder.getToBuyItems =  ShoppingListCheckOffService.getToBuyItems();
     itemAdder.removeItem = function (itemIndex) {
       ShoppingListCheckOffService.addItem(itemAdder.getToBuyItems[itemIndex].name,
         itemAdder.getToBuyItems[itemIndex].quantity);
       ShoppingListCheckOffService.removeItem(itemIndex);
     };
     itemAdder.IsToBuyEmpty = function()
     {
       if(itemAdder.getToBuyItems.length < 1)
        return true;
     }
   }

function ShoppingListCheckOffService()
{
    var service = this;
    var toBuy = [
      {
        name: "Cookies",
        quantity: "2"
      },
      {
        name: "Crackers",
        quantity: "3"
      },
      {
        name: "Chips",
        quantity: "5"
      },
      {
        name: "Juice Boxes",
        quantity: "1",
      },
      {
        name: "Eggs",
        quantity: "12"
      }
    ];
    var boughtList = [];

    service.addItem = function(itemName,itemQuantity) {
      var item = {
        name: itemName,
        quantity: itemQuantity
      };
      boughtList.push(item);
  };

    service.removeItem = function (itemIdex) {
      toBuy.splice(itemIdex, 1);
    };

    service.getBoughtItems = function () {
     return boughtList;
   };

   service.getToBuyItems = function () {
    return toBuy;
    };
}

function AlreadyBoughtController(ShoppingListCheckOffService) {
  var itemAdder = this;
  itemAdder.getBoughtItems =  function(){
    return ShoppingListCheckOffService.getBoughtItems();
  };

  itemAdder.IsBoughtEmpty = function()
  {
    if(itemAdder.getBoughtItems().length < 1)
     return true;
  }
}
})();

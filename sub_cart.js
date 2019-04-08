"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 2

   Author: Austin Inmon
   Date:   4.08.19

   Filename: sub_cart.js


   Functions List:
   setupCart() 
      Sets up the event handlers for the Add to Order buttons on the web page.
      
   addItem(e)
      Adds the food item associated with the Add to Order button to the shopping
      cart, keeping track of the number of items of each product ordered by 
      the customer.

*/
//Telling to run the setupCart function when page is fully loaded.
window.addEventListener("load", setupCart);
//Defined the event handlers for the add to order buttons.
function setupCart() {
      //Get all content from the html document that has the classname of addButton.
      var addButtons = document.getElementsByClassName("addButton");
      //Every time the buttons are clicked on the item is added to the cart. 
      for (var i = 0; i < addButtons.length; i++) {
            addButtons[i].onclick = addItem;

      }
}
//Added items to the shopping cart.
function addItem(e) {
      //Get the element next to the foodItem element. 
      var foodItem = e.target.nextElementSibling;
      //Getting the value of the id that is inside of the foodItem. 
      var foodID = foodItem.id;
      //Cloning the fooditem and every node after the fooditem node. 
      var foodDescription = foodItem.cloneNode(true);
      //Getting all elements that have the id of cart that is in the document. 
      var cartBox = document.getElementById("cart");
      //Setting the initial duplicateOrder to false. 
      var duplicateOrder = false;
      //Checking to make sure that the item is in the list and if the item is then added by one.
      for (var i = 0; i < cartBox.childNodes.length; i++) {
            if (cartBox.childNodes[i].id === foodID) {
                  cartBox.childNodes[i].getElementsByTagName("span")[0].innerHTML = parseInt(cartBox.childNodes[i].getElementsByTagName("span")[0].innerHTML) + 1;

                  duplicateOrder = true;

                  break;
            }
      }
      //If item does not exsits, then the item will be created and by added by one and added tot he order list. 
      if (duplicateOrder === false) {

            var orderCount = document.createElement("span");

            orderCount.textContent = 1;

            foodDescription.appendChild(orderCount);

            cartBox.appendChild(foodDescription);
      }
}
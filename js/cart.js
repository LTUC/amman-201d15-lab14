/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tbody = document.getElementsByTagName("tbody");
  tbody[0].textContent = "";                               
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  let tbody = document.getElementsByTagName('tbody');
  // TODO: Iterate over the items in the cart
  for(let i=0; i<cart.items.length;i++) {
    let itemName = cart.items[i].product;
    // TODO: Create a TR
    let tr = document.createElement('tr');
    // TODO: Create a TD for the delete link, quantity,  and the item
    let td1 = document.createElement('td');
    let deleteLink = document.createElement('button');
    deleteLink.textContent = 'x';
    deleteLink.setAttribute("id", itemName);
    td1.appendChild(deleteLink);
    let td2 = document.createElement('td');
    td2.textContent = cart.items[i].quantity;
    let td3 = document.createElement('td');
    td3.textContent = cart.items[i].product;
    
    // TODO: Add the TR to the TBODY and each of the TD's to the TR
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    tbody[0].appendChild(tr);
  }
}

function removeItemFromCart(event) {
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  if(event.target.nodeName === 'BUTTON'){
    cart.removeItem(event.target.id);
  }
  // TODO: Save the cart back to local storage
  cart.saveToLocalStorage();
  // TODO: Re-draw the cart table
  renderCart();
}

// This will initialize the page and draw the cart on screen
renderCart();

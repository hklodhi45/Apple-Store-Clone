import { latestProducts, accessories, sound } from "./data.js";

// CONSTANT AND DOM ELEMENTS 
const QTY_OPTIONS_MAX = 9;
const EMI_RATE = 0.17453;
const bagQtyElement = document.querySelector('.bag-qty');

// function for save data in local storage
const saveData = () => {
  localStorage.setItem('bag', JSON.stringify(bag));
}

export let bag = JSON.parse(localStorage.getItem('bag'));

// Initialize bag in localStorage if it doesn't exist
  if (!localStorage.getItem('bag')) {
    bag = [];
    saveData();
  }

// push the product in bag or update it's quantity
export const addToBag = productId => {
  let matchItem;
  bag.forEach(product => {
    if (product.productId === productId) {
      product.quantity++;
      matchItem = true;
    }
  });

  if (!matchItem) {
    bag.push({
      productId,
      quantity: 1
    });
  }
  saveData();
  checkBagQtyStatus();
}

let bagItemsContainerHTML;

// function to search product by Id
let match;
const searchProductById = bagItemId =>{
  latestProducts.forEach(item => {
  if (bagItemId === item.productId)
      match = item;
  });
  accessories.forEach(item => {
    if (bagItemId === item.productId)
      match = item;
  });
  sound.forEach(item => {
    if (bagItemId === item.productId)
      match = item;
  });
}

// Generates the .bag-item-container HTML based on current bag quantities
const checkBagQtyStatus = () => {
  let bagItemsListContainerHTML = '';
  let bagQty = 0;
  let bagTotal = 0;
  if (localStorage.getItem('bag')) {
    bag.forEach(product => {
      bagQty += product.quantity;
    });
  }
  bagQtyElement.innerHTML = bagQty;
  if (bagQty === 0) {
    bagQtyElement.classList.add('transparent');
    bagItemsContainerHTML = `
    <div class="empty-bag-sub-container">
      <div class="empty-bag-head">Your bag is empty.</div>
      <div class="empty-bag-subhead">Sign in to see if you have any saved items. Or continue shopping.
      </div>
      <button class="sign-in-btn empty-bag-btn">Sign In</button>
      <a href="store.html"><button class="continue-btn empty-bag-btn">Continue Shopping</button></a>
    </div>`;
    document.querySelector('.bag-items-container').innerHTML = bagItemsContainerHTML;
  } else {
    bag.forEach((bagItem, i) => {
      searchProductById(bagItem.productId);
      let itemQty = bagItem.quantity;
      let qtySelectLoopHTML = '';
      for (let j = 1; j <= QTY_OPTIONS_MAX; j++) {
        if (j === itemQty)
          qtySelectLoopHTML += `<option value="${j}" selected>${j}</option>`;
        else
          qtySelectLoopHTML += `<option value="${j}">${j}</option>`;
      }
      bagTotal += Number(match.price * bagItem.quantity);
      bagItemsListContainerHTML += `
        <div>
          <div style="background-image: url(${match.img});">
          </div>
          <div class="bag-prod-detail">
            <div>
              <span>${match.name}</span>
              <span>
                <select name="qty-select" class="bag-item-qty-select" data-qty-select-data="${i}">
                  ${qtySelectLoopHTML}
                </select>
              </span>
              <span>₹${match.price * bagItem.quantity}</span>
            </div>
            <div>
              <span>Pay 15.99% p.a. for 6 months^</span>
              <span>₹${Math.round(match.price * bagItem.quantity * EMI_RATE)}.00/mo.^</span>
            </div>
            <div><button onclick="removeFromBag(${i})">Remove</botton></div>
          </div>
          <div class="bag-delhivery-detail">
            <div>
              <div>Find out how soon you can get this item. <a href=""> Enter pin code</a></div>
              <div><img src="Images/delhivery-truck.png" alt=""> In stock and ready to ship.</div>
              <div><img src="Images/apple-store-pick.png" alt=""> Pick up at an Apple Store near you.</div>
            </div>
          </div>
        </div>
      `;
    });
    bagItemsContainerHTML = `
    <div bag-items-sub-container>
      <div class="total-head">
        <div>Your bag total is ₹${bagTotal}.00 or ₹${Math.round(bagTotal * EMI_RATE)}.00/mo.^</div>
        <a href=""><button class="check-out">Check Out</button></a>
      </div>
      <div class="bag-items-list-container">
      </div>
      <div class="checkout-container">
        <div>
          <div class="subtotal-shipping">
            <div class="text-space-bw">
              <span>Bag Subtotal</span>
              <span>₹${bagTotal}.00</span>
            </div>
            <div class="text-space-bw">
              <span>Shipping</span>
              <span>FREE</span>
            </div>
          </div>
          <div class="total">
            <div class="text-space-bw">
              <span>Total</span>
              <span>₹${bagTotal}.00</span>
            </div>
            <div class="text-space-bw">
              <span>Monthly payment</span>
              <span>₹${Math.round(bagTotal * EMI_RATE)}.00/mo.^ with EMI</span>
            </div>
          </div>
          <div>
            <a>Explore No Cost EMIfootnote<sup>§</sup> and instant cashback<sup>§§</sup></a>
          </div>
          <div>
            <button>Check Out</button>
          </div>
        </div>
      </div>
    </div>`;
    document.querySelector('.bag-items-container').innerHTML = bagItemsContainerHTML;
    document.querySelector('.bag-items-list-container').innerHTML = bagItemsListContainerHTML;

    // Attach event listeners to quantity selects AFTER they are rendered
    document.querySelectorAll('.bag-item-qty-select')
      .forEach(select => {
        select.addEventListener('change', (event) => {
          bag[select.dataset.qtySelectData].quantity = Number(event.target.value);
          checkBagQtyStatus();
        });
        saveData();
      });
  }

}

setTimeout(() => {
  checkBagQtyStatus();
}, 10);

// function for remove button
export const removeFromBag = index => {
  bag.splice(index, 1);
  saveData();
  checkBagQtyStatus();
}

// expose helper to the global scope so inline handlers can call it
window.removeFromBag = removeFromBag;


const viewportWidth = window.innerWidth;
let navbarHTML = document.querySelector('.navbar');
if(viewportWidth <= 600){
  document.querySelectorAll('.menubar-ctg')
  .forEach(menubarCtgElement => {
    menubarCtgElement.classList.add('displayNone');
  });
}
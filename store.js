import {bag,addToBag} from './Data/bag.js';
import { latestProducts,accessories,sound,helpSection } from "./Data/data.js";

// Controls the visibility of back and next buttons
let updateButtonVisibility = (ctg,back,next,L,R) => {
  let maxScroll = ctg.scrollWidth - ctg.clientWidth;

  if(ctg.scrollLeft <= L){
    back.classList.add('hidden');
    next.classList.remove('hidden');
  } else if(ctg.scrollLeft >= maxScroll-R){
    next.classList.add('hidden');
    back.classList.remove('hidden');
  } else{
    back.classList.remove('hidden');
    next.classList.remove('hidden');
  }
}

// Generates HTML and assigns back-navigation behavior to .back-btn elements
document.querySelectorAll('.back-btn')
  .forEach( backBtn =>{
    backBtn.innerHTML = `
      <svg width="44" height="44" viewBox="-2 -3 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
        stroke-linecap="round" stroke-linejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
      </svg>
    `;

    const ctg = document.querySelector(`.${backBtn.dataset.ctg}`);
    backBtn.addEventListener('click', () => {
     ctg.scrollLeft -= 251;
    });
});

// Generates HTML and assigns forward-navigation behavior to .next-btn elements
document.querySelectorAll('.next-btn')
  .forEach( nextBtn =>{
    nextBtn.innerHTML = `
      <svg width="44" height="44" viewBox="-4 -3 24 24" fill="none" stroke="currentColor" stroke-width="2.5"
        stroke-linecap="round" stroke-linejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>
    `;

    const ctg = document.querySelector(`.${nextBtn.dataset.ctg}`);
    nextBtn.addEventListener('click', () => {
     ctg.scrollLeft += 251;
    });
});

// Category-ScrollBar
let categoryScroll = document.querySelector('.category');
let backBtn = document.getElementById('back-btn');
let nextBtn = document.getElementById('next-btn');

updateButtonVisibility(categoryScroll,backBtn,nextBtn,40,41);

requestAnimationFrame(()=>{
  backBtn.classList.remove('no-transition')
});

categoryScroll.addEventListener('scroll',()=>{
  updateButtonVisibility(categoryScroll,backBtn,nextBtn,40,41);
});

// Generates HTML for Latest Section
let latestHTML = '';

latestProducts.forEach((latest)=>{
  latestHTML += `
    <div>
      <div class="${latest.textColor}" style="background-image:url(${latest.img});">
        <div>${latest.name}</div>
        <div>${latest.tagline}</div>
        <div>From ₹${latest.price}<sup>‡</sup></div>
        <div class="last-child js-add-to-bag" data-product-id="${latest.productId}">Add to Bag</div>
      </div>
    </div>
  `;
});
document.querySelector('.latest-items').innerHTML = latestHTML;

// Latest Section Scroll bar
let latestScroll = document.querySelector('.latest-items');
let latestBackBtn = document.getElementById('latest-back-btn');
let latestNextBtn = document.getElementById('latest-next-btn');

updateButtonVisibility(latestScroll,latestBackBtn,latestNextBtn,200,165);

requestAnimationFrame(()=>{
  latestBackBtn.classList.remove('no-transition')
});

latestScroll.addEventListener('scroll',()=>{
  updateButtonVisibility(latestScroll,latestBackBtn,latestNextBtn,200,165);
});

// Generates HTML for Helo Section
let helpHTML = '';

helpSection.forEach((help)=>{
  helpHTML += `
    <div>
      <div class="${help.textColor}" style="background-image:url(${help.img});">
        <div>${help.head}</div>
        <div>${help.subHead}</div>
        <div class="ctg-tag">${help.tag}</div>
      </div>
    </div>
  `;
});
document.querySelector('.help-section').innerHTML = helpHTML;

// Help Section Scroll bar
let helpScroll = document.querySelector('.help-section');
let helpBackBtn = document.getElementById('help-back-btn');
let helpNextBtn = document.getElementById('help-next-btn');

updateButtonVisibility(helpScroll,helpBackBtn,helpNextBtn,250,60);

requestAnimationFrame(()=>{
  helpBackBtn.classList.remove('no-transition')
});

helpScroll.addEventListener('scroll',() => {
  updateButtonVisibility(helpScroll,helpBackBtn,helpNextBtn,250,60);
});


// Generates HTML for Accessories Section
let accesHTML = '';

accessories.forEach(acces => {
  accesHTML +=`
    <div>
      <div style="background-color: white;" class="product">
        <div>
          <div class="prod-img">
            <div style="background-image: url(${acces.img});"></div>
          </div>
          <div class="prod-detail">
            <div class="acces-atb js-add-to-bag" data-product-id="${acces.productId}">Add to Bag</div> 
            <div>${acces.tag}</div>
            <div>${acces.name}</div>
            <div>MRP ₹${acces.price} (Incl. of all taxes)</div>
          </div>
        </div>
      </div>
    </div>
  `;
});
document.querySelector('.acces-section').innerHTML = accesHTML;

// Accessories Section Scroll bar

let accesScroll = document.querySelector('.acces-section');
let accesBackBtn = document.getElementById('acces-back-btn');
let accesNextBtn = document.getElementById('acces-next-btn');

updateButtonVisibility(accesScroll,accesBackBtn,accesNextBtn,160,158);

requestAnimationFrame(()=>{
  accesBackBtn.classList.remove('no-transition')
});

accesScroll.addEventListener('scroll',() => {
  updateButtonVisibility(accesScroll,accesBackBtn,accesNextBtn,160,158);
});

// Generates HTML for Sound Section
let soundHTML = '';

sound.forEach(sound => {
  soundHTML +=`
    <div>
      <div style="background-color: white;" class="product">
        <div>
          <div class="prod-img">
            <div style="background-image: url(${sound.img});"></div>
          </div>
          <div class="prod-detail">
            <div class="acces-atb js-add-to-bag" data-product-id="${sound.productId}">Add to Bag</div> 
            <div>${sound.tag}</div>
            <div>${sound.name}</div>
            <div>MRP ₹${sound.price} (Incl. of all taxes)</div>
          </div>
        </div>
      </div>
    </div>
  `;
});
document.querySelector('.sound-section').innerHTML = soundHTML;

// Sound Section scroll bar
let soundScroll = document.querySelector('.sound-section');
let soundBackBtn = document.getElementById('sound-back-btn');
let soundNextBtn = document.getElementById('sound-next-btn');

updateButtonVisibility(soundScroll,soundBackBtn,soundNextBtn,160,158);

requestAnimationFrame(()=>{
  soundBackBtn.classList.remove('no-transition')
});

soundScroll.addEventListener('scroll',() => {
  updateButtonVisibility(soundScroll,soundBackBtn,soundNextBtn,160,158);
});

// Update cart quantity
const bagQtyElement = document.querySelector('.bag-qty');
let bagQty = 0;
bag.forEach(product => {
      bagQty += product.quantity;
});
bagQtyElement.innerHTML = bagQty;

const updateBagQty = () => {
  let bagQty = 0;
    bag.forEach(product => {
      bagQty += product.quantity;
    });
  bagQtyElement.innerHTML = bagQty;
}

// Add to bag button functionality
document.querySelectorAll('.js-add-to-bag')
  .forEach(btn => {
    btn.addEventListener('click',()=>{
      bagQtyElement.classList.remove('transparent');
      const productId = btn.dataset.productId;
      addToBag(productId);
      updateBagQty();
    });
});

// Hide the bag quantity container when quantity is 0
if(Number(bagQtyElement.innerHTML) === 0){
  bagQtyElement.classList.add('transparent');
}

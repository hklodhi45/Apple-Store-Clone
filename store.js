// Category-ScrollBar
let categoryScroll = document.querySelector('.category');
let backBtn = document.getElementById('back-btn');
let nextBtn = document.getElementById('next-btn');

let updateButtonVisibility = () => {
  let maxScroll = categoryScroll.scrollWidth - categoryScroll.clientWidth;

  if(categoryScroll.scrollLeft <= 40){
    backBtn.classList.add('hidden');
    nextBtn.classList.remove('hidden');

  } else if(categoryScroll.scrollLeft >= maxScroll-41){
    nextBtn.classList.add('hidden');
    backBtn.classList.remove('hidden');
  }
}

updateButtonVisibility();

requestAnimationFrame(()=>{
  backBtn.classList.remove('no-transition')
})

categoryScroll.addEventListener('scroll',updateButtonVisibility);

nextBtn.addEventListener('click', () => {
  categoryScroll.scrollLeft += 251;
});
backBtn.addEventListener('click', () => {
  categoryScroll.scrollLeft -= 251;
});

// Latest Items Scroll bar

let latestScroll = document.querySelector('.latest-items');
let latestBackBtn = document.getElementById('latest-back-btn');
let latestNextBtn = document.getElementById('latest-next-btn');

let updateLatestBtnVisibility = () => {
  let latestMaxScroll = latestScroll.scrollWidth - latestScroll.clientWidth;

  if(latestScroll.scrollLeft <= 200){
    latestBackBtn.classList.add('hidden');
  }
  else if(latestScroll.scrollLeft >= latestMaxScroll-165){
    latestNextBtn.classList.add('hidden');
  }
  else{
    latestBackBtn.classList.remove('hidden');
    latestNextBtn.classList.remove('hidden');
  }
}

updateButtonVisibility();

requestAnimationFrame(()=>{
  latestBackBtn.classList.remove('no-transition')
})

latestScroll.addEventListener('scroll',updateLatestBtnVisibility);

latestNextBtn.addEventListener('click', () => {
  latestScroll.scrollLeft += 251;
});
latestBackBtn.addEventListener('click', () => {
  latestScroll.scrollLeft -= 251;
});

// Help Scroll bar

let helpScroll = document.querySelector('.help-section');
let helpBackBtn = document.getElementById('help-back-btn');
let helpNextBtn = document.getElementById('help-next-btn');

let updateHelpBtnVisibility = () => {
  let helpMaxScroll = helpScroll.scrollWidth - helpScroll.clientWidth;

  if(helpScroll.scrollLeft <= 250){
    helpBackBtn.classList.add('hidden');
  }
  else if(helpScroll.scrollLeft >= helpMaxScroll-60){
    helpNextBtn.classList.add('hidden');
  }
  else{
    helpBackBtn.classList.remove('hidden');
    helpNextBtn.classList.remove('hidden');
  }
}

updateHelpBtnVisibility();

requestAnimationFrame(()=>{
  helpBackBtn.classList.remove('no-transition')
})

helpScroll.addEventListener('scroll',updateHelpBtnVisibility);

helpNextBtn.addEventListener('click', () => {
  helpScroll.scrollLeft += 251;
});
helpBackBtn.addEventListener('click', () => {
  helpScroll.scrollLeft -= 251;
});

// Latest Items Data

let latestHTML = '';

latestProducts.forEach((latest)=>{
  latestHTML += `
    <div>
      <div class="${latest.textColor}" style="background-image:url(${latest.itemImg});">
        <div>${latest.itemName}</div>
        <div>${latest.itemTagline}</div>
        <div>From &#8377;${latest.itemPrice}<sup>‡</sup></div>
        <div class="last-child">Add to Bag</div>
      </div>
    </div>
  `;
});
document.querySelector('.latest-items').innerHTML = latestHTML;

// Help Section Data

let helpHTML = '';

HelpSection.forEach((help)=>{
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
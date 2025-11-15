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
  categoryScroll.scrollLeft += 100;
});
backBtn.addEventListener('click', () => {
  categoryScroll.scrollLeft -= 100;
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
  else if(latestScroll.scrollLeft >= latestMaxScroll-160){
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
  latestScroll.scrollLeft += 420;
});
latestBackBtn.addEventListener('click', () => {
  latestScroll.scrollLeft -= 420;
});
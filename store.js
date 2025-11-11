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
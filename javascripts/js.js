
document.addEventListener('DOMContentLoaded', function() {
  animIMG()
    const btn = document.getElementById("btn");
    btn.addEventListener('click', function() {
      btn.classList.remove('buttonAnim');
      void btn.offsetWidth;
      btn.classList.remove('button');
      btn.classList.add('buttonAnim'); 
      btn.addEventListener('animationend', function() {
        btn.classList.remove('buttonAnim');
        btn.classList.add('button');
      })
    });
  

  
  const buttonChoise = document.querySelector('.choiseButton');
  const choiseimg = document.querySelector('.choiseimg');
  
  if (buttonChoise && choiseimg) {
    buttonChoise.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      choiseimg.classList.toggle('talisman');
      });
  }


  const slides = document.querySelectorAll('.slide');
  let currentIndex = 2;
  
  function updateSlides() {
  slides.forEach((slide, index) => {
          
  slide.className = 'slide';
  slide.style.opacity = '';
  slide.style.pointerEvents = '';
          
  const diff = index - currentIndex;
          
  
  if (Math.abs(diff) <= 2) {
  if (diff === 0) {
  slide.classList.add('active');
  } else if (diff === -1) {
  slide.classList.add('prev-1');
  } else if (diff === 1) {
  slide.classList.add('next-1');
  } else if (diff === -2) {
  slide.classList.add('prev-2');
  } else if (diff === 2) {
  slide.classList.add('next-2');
  }
  } else {
  slide.style.opacity = '0';
  slide.style.pointerEvents = 'none';
  }
  });
  }
  

slides.forEach(slide => {
slide.addEventListener('click', function(e) {
  if (e.target.closest('.choiseButton')) return;
          
const clickedIndex = parseInt(this.getAttribute('data-index'));
  if (!isNaN(clickedIndex) && clickedIndex !== currentIndex) {
  currentIndex = clickedIndex;
  updateSlides();
  }
  });
  });
  

  updateSlides();
  

  window.addEventListener('resize', function() {
      requestAnimationFrame(updateSlides);
  });
});
  
  function animIMG() {
    let images = document.querySelectorAll('.struct_arch img')
  
    for (let i = 0; i < images.length; i++) {
      images[i].style.cssText = `animation-delay: ${-i}s;`
    }
  }
  


  
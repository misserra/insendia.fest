
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
    buttonChoise.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      choiseimg.classList.toggle('talisman');
      });
  }

  const Buttonchoise = document.querySelector('.choisemeal');
  const choiseimgg = document.querySelector('.choiseimgg');
  
  if (Buttonchoise && choiseimgg) {
    Buttonchoise.addEventListener('click', function(event) {
      event.preventDefault();
      event.stopPropagation();
      choiseimgg.classList.toggle('yourmeal');
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
slide.addEventListener('click', function(event) {
  if (event.target.closest('.choiseButton')) return;
          
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


const dragzone = document.getElementById('dragzone');
let currentDraggedElement = null;
let offsetX, offsetY;

document.querySelectorAll('.draggable').forEach(item => {
  // Начало перетаскивания
  item.addEventListener('dragstart', function(event) {
    // Сохраняем ссылку на сам элемент
    currentDraggedElement = this;
    event.dataTransfer.setData('text/uri-list', currentDraggedElement.src);
    event.dataTransfer.setData('text/plain', currentDraggedElement.id);
    event.dataTransfer.effectAllowed = 'move';
    const rect = event.target.getBoundingClientRect();
    offsetX = event.clientX - rect.left;
    offsetY = event.clientY - rect.top;
    // Визуальный эффект
    this.style.opacity = '0.7';
    this.style.zIndex = '1000';
    // Сохраняем элемент в дататрансфер
    event.dataTransfer.setDragImage(this, offsetX, offsetY);
  });

  item.addEventListener ('dragend', (event) => {
    currentDraggedElement.style.opacity = '1';
    currentDraggedElement.style.zIndex = '1000';
    currentDraggedElement = null;
});
});

document.addEventListener('dragover', function(event) {
  event.preventDefault();
  if (currentDraggedElement) {
    event.dataTransfer.dropEffect = 'move';
  }
});

document.addEventListener('drop', (event) => {
event.preventDefault();
if (!currentDraggedElement) return;

const dropRect = dragzone.getBoundingClientRect();
// Calculate the position as a percentage of the drop container's dimensions
const percentLeft = ((event.clientX - dropRect.left - offsetX) / dropRect.width) * 100;
const percentTop = ((event.clientY - dropRect.top - offsetY) / dropRect.height) * 100;

// Append element to the container so it stays on the plate
dragzone.appendChild(currentDraggedElement);
currentDraggedElement.style.left = `${percentLeft}%`;
currentDraggedElement.style.top = `${percentTop}%`;
});

const makeButton = document.getElementById('makeButton');
const wishText = document.querySelector('.wish');

makeButton.addEventListener('click', function() {
    wishText.innerHTML = '<span class="wish-fulfilled">Желание сбудется</span>';
});


});

// Функции:
//Функция для анимации
  function animIMG() {
    let images = document.querySelectorAll('.struct_arch img')
  
    for (let i = 0; i < images.length; i++) {
      images[i].style.cssText = `animation-delay: ${-i}s;`
    }
  }

  // Функция для перевода пикселей в vw
  function pxToVw(px) {
    return (px / window.innerWidth) * 100;
  }

  // Функция для перевода vw в пиксели
  function vwToPx(vw) {
    return (vw * window.innerWidth) / 100;
  }

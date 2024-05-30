const sliderContainer = document.querySelector('.container');
const sliderLine = document.querySelector('.slider__line');
const images = document.querySelectorAll('img');
const dots = document.querySelectorAll('.slider__dot');
const nextBtn = document.querySelector('.slider__next-btn');
const prevBtn = document.querySelector('.slider__prev-btn');


//transform : translate(-571px);
let orderImg = 0;

let width;

function setWidthLine() {
    width = sliderContainer.offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width +'px';
        item.style.height = 'auto';
    });
}

window.addEventListener('resize', setWidthLine);
setWidthLine();


nextBtn.addEventListener('click', function() {

    orderImg++;
    if (orderImg > images.length - 1) {
        orderImg = 0;
    }

    
    scrollSlider();

})

prevBtn.addEventListener('click', function() {
   
    orderImg--;
    if (orderImg < 0) {
        orderImg = images.length - 1;
    }

    scrollSlider();  

})

function scrollSlider() {
    const value = orderImg * width;
    sliderLine.style.transform = `translate(-${value}px)`;
}










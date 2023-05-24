var add = document.getElementById('add');
var minus = document.getElementById('minus');

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let index = 0;
previous = slides.length - 2;

function nextSlide() {
    console.log(index);
    slides[index].style.display = 'block';
    slides[index].style.marginLeft = '-100%';
    if (index == 0) {
        minus.innerHTML = 'prev';
        minus.style.background = '#FBBF24';
    }
    index++;
    if (index === slides.length - 1) {
        index = 0;
        console.log('index value is ' + index);
    }
}
// show previous slide 
function prevSlide() {
    // previous = index;
    console.log(previous);
    slides[previous].style.marginLeft = '0.05%';
    previous -= 1;

    if (previous == -1) {
        previous = slides.length - 2;
    }
}
// Call nextSlide function on slider click
add.addEventListener('click', nextSlide);
minus.addEventListener('click', prevSlide);
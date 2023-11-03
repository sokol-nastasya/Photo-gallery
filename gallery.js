const imgText = document.getElementById('imgText');

const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');

const modalClose = document.getElementById('modalClose');

const slides = document.getElementsByClassName('mySlides');
const dots = document.getElementsByClassName('dot');


let sliderIndex = 1;
showSlides(sliderIndex);

let slideshowInterval = setInterval(function() {
    plusSlides(1);
}, 3000)

function OpenPhoto(imgs) {
    modal.style.display = 'block';
    modalImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;

};

modalClose.addEventListener('click', function() {
    modal.style.display = 'none';
});

function plusSlides(n) {
    showSlides(sliderIndex += n);
};

function currentSlide(n) {
    showSlides(sliderIndex = n);
};

function showSlides(n){
    if (n > slides.length) {
        sliderIndex = 1;
    }

    if (n < 1) {
        sliderIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[sliderIndex - 1].style.display = 'block';
    dots[sliderIndex-1].className += ' active';
}


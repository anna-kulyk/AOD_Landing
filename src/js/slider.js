let slideIndex = 1;
let dots = document.querySelectorAll('.slider__dot');
let slides = document.querySelectorAll(".slider__item");

showSlides(slideIndex);

let slide = document.querySelector(".slider__body");
let observer = new IntersectionObserver(function(entries) {
	if(entries[0].isIntersecting === true)
		plusSlides(1);
}, { threshold: [0] });

setInterval(()=>{observer.observe(slide)}, 10000);

// setInterval(()=>plusSlides(1), 10000);

dots.forEach((dot,index) => {
    dot.addEventListener('click', () => currentSlide(index+1));
});

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
    observer.unobserve(slide);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length};

    slides.forEach(slide => {
        slide.style.display = "none";
    });

    dots.forEach(dot => {
        dot.classList.remove("slider__dot_active");
    });

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].classList.add("slider__dot_active");
}
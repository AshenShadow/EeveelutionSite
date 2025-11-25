/* --- TURNING SLIDES --- */
function plusSlides(n) {
    showSlides(slideIndex += n);
}

/* --- SHOWING SLIDES --- */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("eeveelution");
    
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    
    slides[slideIndex-1].style.display = "block";  
}

/* --- BUTTONS --- */
const desktopBtns = document.querySelectorAll('.desktop-only');
const mobileControls = document.querySelector('.mobile-controls');

/* --- MOBILE --- */
function checkMobile() {
    if (window.innerWidth <= 900) {
        desktopBtns.forEach(btn => btn.style.display = 'none');
        mobileControls.style.display = 'flex';
    } else {
        desktopBtns.forEach(btn => btn.style.display = 'flex');
        mobileControls.style.display = 'none';
    }
}

window.addEventListener('resize', checkMobile);
checkMobile();
document.addEventListener('DOMContentLoaded', function () {
    const boxes = document.querySelectorAll('.box');

    function checkVisibility() {
        const triggerBottom = window.innerHeight / 5 * 4;

        boxes.forEach(box => {
            const boxTop = box.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                box.classList.add('visible');
            } else {
                box.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);

    // Initial check
    checkVisibility();
});
// for nav color effect as home page
window.addEventListener('scroll',function(){
    const boxes = document.querySelectorAll(".box");
    const navbar = document.getElementById("navbar");

    boxes.forEach(box =>{
        const rect = box.getBoundingClientRect();
        if (rect.top <= 0 && rect.bottom >= 0) {
            navbar.style.backgroundColor = window.getComputedStyle(box).backgroundColor;
        }
        });
});
window.addEventListener("scroll",function(){
const sections = document.querySelectorAll(".section");
const navbar = document.getElementById("navbar");

sections.forEach(section =>{
    const rect = section.getBoundingClientRect();
    if(rect.top <=0 && rect.bottom >=0){
        navbar.style.backgroundColor = window.getComputedStyle(section).backgroundColor
    }
})
});
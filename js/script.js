// ==========================
// MOBILE MENU
// ==========================

const menu = document.getElementById("menu");
const menuToggle = document.getElementById("menuToggle");

menuToggle.addEventListener("click", function(){

    menu.classList.toggle("active");

});

// Close the mobile menu after a section is selected.
menu.querySelectorAll("a").forEach(function(link){
    link.addEventListener("click", function(){
        menu.classList.remove("active");
    });
});

// ==========================
// BACK TO TOP
// ==========================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function(){

    if(document.documentElement.scrollTop > 300){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.onclick=function(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};
// Animated Counter

const counters = document.querySelectorAll(".counter");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {

            const counter = entry.target;
            const target = parseInt(counter.dataset.target);
            let count = 0;

            const update = () => {

                const increment = Math.max(1, Math.ceil(target / 100));

                if (count < target) {
                    count += increment;

                    if (count > target) count = target;

                    counter.textContent = count;

                    requestAnimationFrame(update);

                } else {

                    if (target >= 1000) {
                        counter.textContent = target + "+";
                    } else {
                        counter.textContent = target + "+";
                    }

                }
            };

            update();
            observer.unobserve(counter);

        }
    });
});

counters.forEach(counter => observer.observe(counter));

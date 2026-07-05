// Navigation
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});


// Typing Animation
const hiddenElements = document.querySelectorAll("section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach((el)=>{

    el.classList.add("hidden");
    observer.observe(el);

});

const words = [
    "IT Management Student",
    "Hardware Enthusiast",
    "Web Developer",
    "Graphic Designer",
    "Future DevOps Engineer"
];

let wordIndex = 0;
let letterIndex = 0;

const typing = document.getElementById("typing");

if (typing) {
function type(){

    if(letterIndex < words[wordIndex].length){

        typing.textContent += words[wordIndex].charAt(letterIndex);

        letterIndex++;

        setTimeout(type,100);

    }else{

        setTimeout(erase,1500);

    }

}

function erase(){

    if(letterIndex > 0){

        typing.textContent =
        words[wordIndex].substring(0,letterIndex-1);

        letterIndex--;

        setTimeout(erase,50);

    }else{

        wordIndex++;

        if(wordIndex >= words.length){

            wordIndex=0;

        }

        setTimeout(type,300);

    }

}
}

// Skills Animation
document.addEventListener("DOMContentLoaded",type);

const bars=document.querySelectorAll(".progress span");

const skillObserver=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const bar=entry.target;

bar.style.width=bar.dataset.width;

}

});

});

bars.forEach(bar=>{

bar.style.width="0";

skillObserver.observe(bar);

});

/* ========================================
   SCROLL PROGRESS BAR
======================================== */
const progressBar = document.getElementById("progress-bar");

if (progressBar) {

    window.addEventListener("scroll", () => {

        const scroll = document.documentElement.scrollTop;

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const progress = (scroll / height) * 100;

        progressBar.style.width = progress + "%";

    });

}

// Back to Top
const topBtn = document.querySelector(".top-btn");

if (topBtn) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {
            topBtn.classList.add("show");
        } else {
            topBtn.classList.remove("show");
        }

    });

}

// Counter Animation
const counters = document.querySelectorAll(".counter");

const counterObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter = entry.target;

const target = +counter.dataset.target;

let count = 0;

const update = ()=>{

const increment = Math.ceil(target/40);

count += increment;

if(count >= target){

counter.textContent = target + "+";

}else{

counter.textContent = count;

requestAnimationFrame(update);

}

};

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>counterObserver.observe(counter));

/* ========================================
   MOBILE MENU
======================================== */

const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

if (menuIcon && navbar) {

    menuIcon.onclick = () => {
        menuIcon.classList.toggle("fa-xmark");
        navbar.classList.toggle("active");
    };

    document.querySelectorAll(".navbar a").forEach(link => {

        link.onclick = () => {
            menuIcon.classList.remove("fa-xmark");
            navbar.classList.remove("active");
        };

    });

}


/* ========================================
   SCROLL REVEAL
======================================== */

const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

}, {

    threshold:0.2

});

reveals.forEach(section => {

    revealObserver.observe(section);

});

/* ========================================
   THEME TOGGLE
======================================== */
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {

    const themeIcon = themeToggle.querySelector("i");

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-theme");
        themeIcon.classList.replace("fa-moon", "fa-sun");
    }

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("light-theme");

        const lightMode = document.body.classList.contains("light-theme");

        if (lightMode) {

            themeIcon.classList.replace("fa-moon", "fa-sun");
            localStorage.setItem("theme", "light");

        } else {

            themeIcon.classList.replace("fa-sun", "fa-moon");
            localStorage.setItem("theme", "dark");

        }

    });

}

/* ========================================
   CUSTOM CURSOR
======================================== */

const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

if (cursorDot && cursorOutline) {

    window.addEventListener("mousemove", (e) => {

        cursorDot.style.left = e.clientX + "px";
        cursorDot.style.top = e.clientY + "px";

        cursorOutline.style.left = e.clientX + "px";
        cursorOutline.style.top = e.clientY + "px";

    });

}
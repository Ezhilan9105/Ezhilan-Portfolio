/* ===========================
   MOBILE MENU
=========================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if(menuBtn){
    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
}

/* ===========================
   SMOOTH SCROLL
=========================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (e) {

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

            navLinks?.classList.remove("show-menu");
        }
    });

});

/* ===========================
   ACTIVE NAV LINK
=========================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }

    });

});

/* ===========================
   NAVBAR SCROLL EFFECT
=========================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});

/* ===========================
   HERO PARALLAX EFFECT
=========================== */

const heroImage = document.querySelector(".hero-image img");

document.addEventListener("mousemove", (e) => {

    if (!heroImage) return;

    const x = (window.innerWidth / 2 - e.clientX) / 40;
    const y = (window.innerHeight / 2 - e.clientY) / 40;

    heroImage.style.transform =
        `translate(${x}px, ${y}px)`;

});

/* ===========================
   TYPING EFFECT
=========================== */

const roleElement = document.querySelector(".hero-role");

if (roleElement) {

    const text = "Frontend Developer";
    let index = 0;

    roleElement.textContent = "";

    function typeWriter() {

        if (index < text.length) {

            roleElement.textContent += text.charAt(index);

            index++;

            setTimeout(typeWriter, 70);
        }
    }

    typeWriter();
}

/* ===========================
   SCROLL REVEAL
=========================== */

const revealElements = document.querySelectorAll(
    ".section-heading, .skill-card, .project-card, .timeline-item, .about-content"
);

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop =
            element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();

/* ===========================
   PARTICLES BACKGROUND
=========================== */

const particlesContainer =
    document.querySelector(".particles-container");

if (particlesContainer) {

    for (let i = 0; i < 40; i++) {

        const particle =
            document.createElement("span");

        particle.classList.add("particle");

        const size =
            Math.random() * 6 + 2;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        particle.style.left =
            `${Math.random() * 100}%`;

        particle.style.top =
            `${Math.random() * 100}%`;

        particle.style.animationDuration =
            `${Math.random() * 10 + 8}s`;

        particle.style.animationDelay =
            `${Math.random() * 5}s`;

        particlesContainer.appendChild(particle);
    }
}

/* ===========================
   COUNTER ANIMATION
=========================== */

const counters = document.querySelectorAll(".counter");

function startCounter() {

    counters.forEach(counter => {

        const target =
            +counter.getAttribute("data-target");

        let count = 0;

        const increment =
            target / 100;

        function updateCounter() {

            if (count < target) {

                count += increment;

                counter.innerText =
                    Math.ceil(count);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target;
            }

        }

        updateCounter();

    });

}

window.addEventListener("load", startCounter);

/* ===========================
   PRELOADER (OPTIONAL)
=========================== */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});
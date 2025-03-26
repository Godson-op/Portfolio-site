// Smooth scroll effect for "Know Me More"
document.getElementById('scrollToAbout').addEventListener('click', function(event) {
    event.preventDefault();
    smoothScrollTo(document.querySelector('#about').offsetTop, 800);
});

// Smooth scrolling function
function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);

        window.scrollTo(0, startPosition + (distance * easeInOutQuad(progress)));

        if (elapsedTime < duration) {
            requestAnimationFrame(animation);
        }
    }

    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    requestAnimationFrame(animation);
}

// ParticleJS configuration
particlesJS("particles-js", {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#ffffff" },
        shape: { type: "circle" },
        opacity: { value: 0.5, random: true },
        size: { value: 3, random: true },
        move: { enable: true, speed: 2, direction: "none", out_mode: "out" }
    },
    interactivity: {
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
        },
        modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 }
        }
    }
});

// Open email in new tab
document.querySelector('.contact-links a[href^="mailto:"]').addEventListener('click', function(event) {
    event.preventDefault();
    window.open(this.href, "_blank");
});

// Initialize Lucide icons
lucide.createIcons();


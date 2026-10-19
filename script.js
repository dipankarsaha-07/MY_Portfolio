const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");

if (window.lucide) {
    window.lucide.createIcons();
}

if (menuToggle && siteNav) {
    menuToggle.addEventListener("click", () => {
        const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
        menuToggle.setAttribute("aria-expanded", String(!isExpanded));
        menuToggle.setAttribute("aria-label", isExpanded ? "Open navigation" : "Close navigation");
        siteNav.classList.toggle("is-open", !isExpanded);
    });

    siteNav.addEventListener("click", (event) => {
        if (event.target instanceof HTMLAnchorElement) {
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute("aria-label", "Open navigation");
            siteNav.classList.remove("is-open");
        }
    });
}

const year = document.querySelector("#year");
if (year) {
    year.textContent = String(new Date().getFullYear());
}

const revealTargets = document.querySelectorAll(
    ".intro-content, .skill-strip, .section-heading, .project-row, .timeline-item, .certifications, .profiles-heading, .profile-grid, .contact-email"
);

if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealTargets.forEach((target) => {
        target.classList.add("reveal");
        revealObserver.observe(target);
    });
}
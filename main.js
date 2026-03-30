// ===== MENU & DROPDOWN =====
const navLinks = document.getElementById("navLinks");
const burger = document.querySelector(".fa-bars");

burger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Закрытие меню при клике вне
document.addEventListener('click', e => {
    if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
        navLinks.classList.remove("active");
        document.querySelectorAll(".dropdown").forEach(d => d.classList.remove("active"));
    }
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) navLinks.classList.remove("active");
    });
});

// DROPDOWN MOBILE
document.querySelectorAll(".dropdown > a").forEach(link => {
    link.addEventListener("click", function(e) {
        if (window.innerWidth <= 768) {
            e.preventDefault();
            const parent = this.parentElement;
            document.querySelectorAll(".dropdown").forEach(d => {
                if (d !== parent) d.classList.remove("active");
            });
            parent.classList.toggle("active");
        }
    });
});

// Плавный скролл к элементу
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});
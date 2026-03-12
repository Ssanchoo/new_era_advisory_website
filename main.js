// ===== MENU =====

// 1. Находим элементы
const navLinks = document.getElementById("navLinks");
const burger = document.querySelector(".fa-bars");

// 2. Открыть меню
function showMenu() {
    navLinks.classList.add("active");
}

// 3. Закрыть меню
function hideMenu() {
    navLinks.classList.remove("active");

    // Закрыть все dropdown
    document.querySelectorAll(".dropdown").forEach(d => {
        d.classList.remove("active");
    });
}

// 4. Закрытие меню при клике на ссылку
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
            hideMenu();
        }
    });
});


// ===== DROPDOWN MOBILE =====

document.querySelectorAll(".dropdown > a").forEach(link => {
    link.addEventListener("click", function(e) {

        if (window.innerWidth <= 768) {

            e.preventDefault();
            const parent = this.parentElement;

            // закрываем другие dropdown
            document.querySelectorAll(".dropdown").forEach(d => {
                if (d !== parent) {
                    d.classList.remove("active");
                }
            });

            parent.classList.toggle("active");
        }

    });
});


// ===== Клик вне меню =====

document.addEventListener('click', function(e) {

    if (!navLinks.contains(e.target) && !burger.contains(e.target)) {
        hideMenu();
    }

});

// Пример: плавный скролл к любому элементу по клику
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
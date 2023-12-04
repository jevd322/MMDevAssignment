document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const dropdownBtn = document.getElementById("menuBtn");
const dropdownMenu = document.getElementById("menuDropdown");

const toggleDropdown = function () {
    dropdownMenu.classList.toggle("show");
};

dropdownBtn.addEventListener("click", 
    function (e) {
        e.stopPropagation();
        toggleDropdown();
});
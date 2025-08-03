const toggleBtn = document.querySelector(".toggle_btn");
const dropDownMenu = document.querySelector(".hamburger_menu");

toggleBtn.onclick = function () {
    toggleBtn.classList.toggle("open");
    dropDownMenu.classList.toggle("open");
};

const menuLinks = document.querySelectorAll(".hamburger_menu a");

menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
        toggleBtn.classList.remove("open");
        dropDownMenu.classList.remove("open");
    });
});

const themeSwitchWrapper = document.querySelector(".theme-switch-wrapper");
const body = document.body;
const sunIcon = document.querySelector(".sun-icon");
const moonIcon = document.querySelector(".moon-icon");

function applyThemeClass(theme) {
    body.classList.remove("light-theme", "dark-theme");
    body.classList.add(theme);

    if (theme === "dark-theme") {
        sunIcon.classList.add("inactive");
        moonIcon.classList.remove("inactive");
    } else {
        sunIcon.classList.remove("inactive");
        moonIcon.classList.add("inactive");
    }
}

themeSwitchWrapper.addEventListener("click", () => {
    const isDark = body.classList.contains("dark-theme");
    const newTheme = isDark ? "light-theme" : "dark-theme";
    applyThemeClass(newTheme);
    localStorage.setItem("theme", newTheme);
});

// Initial theme application
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    applyThemeClass(savedTheme);
} else {
    applyThemeClass("light-theme");
}

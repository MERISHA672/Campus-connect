// ================= SIDEBAR =================

const mobileMenu = document.getElementById("mobileMenu");
const sidebar = document.getElementById("sidebar");

mobileMenu.addEventListener("click", () => {

    sidebar.classList.toggle("open");

    const icon = mobileMenu.querySelector("i");

    if (sidebar.classList.contains("open")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


// ================= DARK MODE =================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        document.documentElement.style.setProperty(
            "--background",
            "#0f172a"
        );

        document.documentElement.style.setProperty(
            "--surface",
            "#111827"
        );

        document.documentElement.style.setProperty(
            "--text",
            "#f8fafc"
        );

        document.documentElement.style.setProperty(
            "--border",
            "#273244"
        );

        themeBtn.innerHTML =
            '<i class="fas fa-sun"></i>';

        localStorage.setItem("theme", "dark");

    } else {

        document.documentElement.style.setProperty(
            "--background",
            "#f6f7fb"
        );

        document.documentElement.style.setProperty(
            "--surface",
            "#ffffff"
        );

        document.documentElement.style.setProperty(
            "--text",
            "#172033"
        );

        document.documentElement.style.setProperty(
            "--border",
            "#e7e9ef"
        );

        themeBtn.innerHTML =
            '<i class="fas fa-moon"></i>';

        localStorage.setItem("theme", "light");

    }

});


// ================= LOAD THEME =================

if (localStorage.getItem("theme") === "dark") {

    themeBtn.click();

}


// ================= SEARCH =================

const searchInput = document.getElementById("searchInput");

const courses = document.querySelectorAll(".course");

searchInput.addEventListener("input", () => {

    const searchValue =
        searchInput.value.toLowerCase().trim();

    courses.forEach(course => {

        const courseName =
            course
            .querySelector("h3")
            .textContent
            .toLowerCase();

        if (courseName.includes(searchValue)) {

            course.style.display = "flex";

        } else {

            course.style.display = "none";

        }

    });

});


// ================= ASSIGNMENT BUTTON =================

const addTaskButton =
    document.querySelector(".primary-btn");

addTaskButton.addEventListener("click", () => {

    const task = prompt(
        "Enter the name of your new task:"
    );

    if (task && task.trim() !== "") {

        alert(
            `Task "${task}" has been added successfully!`
        );

    }

});


// ================= COMMUNITY LIKES =================

const likeButtons =
    document.querySelectorAll(
        ".post-actions button:first-child"
    );

likeButtons.forEach(button => {

    button.addEventListener("click", () => {

        const icon = button.querySelector("i");

        icon.classList.toggle("far");
        icon.classList.toggle("fas");

        if (icon.classList.contains("fas")) {

            button.style.color = "#ef4444";

        } else {

            button.style.color = "";

        }

    });

});


// ================= ACTIVE SIDEBAR =================

const navLinks =
    document.querySelectorAll(".sidebar nav a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        link.classList.add("active");

        sidebar.classList.remove("open");

    });

});


// ================= EVENT BUTTONS =================

const eventButtons =
    document.querySelectorAll(".event button");

eventButtons.forEach(button => {

    button.addEventListener("click", () => {

        alert(
            "Event details will be available soon!"
        );

    });

});

// document.addEventListener("DOMContentLoaded", (event) => {
//   const themeToggle = document.getElementById("theme-toggle");
//   const toggleLabelIcon = document.querySelector(".toggle-label .fas");

//   themeToggle.addEventListener("change", () => {
//     if (themeToggle.checked) {
//       document.body.classList.add("light-theme");
//       toggleLabelIcon.classList.remove("fa-sun");
//       toggleLabelIcon.classList.add("fa-moon");
//     } else {
//       document.body.classList.remove("light-theme");
//       toggleLabelIcon.classList.remove("fa-moon");
//       toggleLabelIcon.classList.add("fa-sun");
//     }
//   });
// });

// Show or hide the scroll-to-top button
window.addEventListener("scroll", () => {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (window.scrollY > 300) {
    scrollToTopBtn.style.display = "block";
  } else {
    scrollToTopBtn.style.display = "none";
  }
});

// Scroll to top when the button is clicked
document.getElementById("scrollToTopBtn").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
      alert("Please fill out all fields.");
      event.preventDefault();
    }
  });

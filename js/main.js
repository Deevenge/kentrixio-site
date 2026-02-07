/* HERO SLIDER */
const slides = document.querySelectorAll('.slides img');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

showSlide(current);
setInterval(nextSlide, 4000);

/* EMAILJS CONTACT FORM */
(function () { emailjs.init("7t3SmVwZrfxAZCFfx"); })();

const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  status.textContent = "Sending message...";
  emailjs.sendForm("service_5x43lc8","template_0a4qp68", this)
  .then(() => emailjs.sendForm("service_5x43lc8","template_vqrfvoo", this))
  .then(() => {
    status.textContent = "✅ Message sent successfully!";
    form.reset();
  })
  .catch((error) => {
    status.textContent = "❌ Failed to send message. Try again.";
    console.error("EmailJS Error:", error);
  });
});

/* HAMBURGER MENU TOGGLE */
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("header nav");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

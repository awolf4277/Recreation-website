// 1. Validate the Contact Form
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = form.querySelector('input[placeholder="Your Name"]');
    const email = form.querySelector('input[placeholder="Email Address"]');
    const message = form.querySelector('textarea');
    if (!name.value.trim() || !email.value.includes("@") || !message.value.trim()) {
      alert("Please fill out all required fields with valid information.");
    } else {
      alert("Thank you! Your message has been submitted.");
      form.reset();
    }
  });
});

// 2. Toggle Carousel Auto-Rotation
function toggleCarouselAutoplay() {
  const carousel = document.querySelector("#carouselExample");
  const bsCarousel = bootstrap.Carousel.getInstance(carousel) || new bootstrap.Carousel(carousel);
  if (carousel.dataset.ride === "carousel") {
    bsCarousel.pause();
    carousel.dataset.ride = "manual";
    alert("Carousel autoplay paused.");
  } else {
    bsCarousel.cycle();
    carousel.dataset.ride = "carousel";
    alert("Carousel autoplay resumed.");
  }
}

// 3. Highlight cards on hover
function highlightCards() {
document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseover", () => {
    card.classList.add("shadow-lg");
    card.style.transform = "scale(1.03)";
  });
  card.addEventListener("mouseout", () => {
    card.classList.remove("shadow-lg");
    card.style.transform = "scale(1)";
  });
});}

// 4. Theme Toggle (Dark/Light)
function toggleTheme() {
  const body = document.body;
  body.classList.toggle("bg-dark");
  body.classList.toggle("text-white");
  alert("Theme switched!");
}




// Fade-in effect on scroll
const sections = document.querySelectorAll(".fade-section");
function fadeOnScroll() {
  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", fadeOnScroll);
fadeOnScroll();

// Nav click fade
document.getElementById("about-link").addEventListener("click", () => {
  setTimeout(
    () => document.getElementById("about").classList.add("visible"),
    400
  );
});
document.getElementById("gallery-link").addEventListener("click", () => {
  setTimeout(
    () => document.getElementById("gallery").classList.add("visible"),
    400
  );
});

// Gallery Lightbox
const lightbox = document.getElementById("lightbox");
document.querySelectorAll(".gallery-grid img").forEach((img) => {
  img.addEventListener("click", () => {
    lightbox.classList.add("active");
    lightbox.querySelector("img").src = img.src;
  });
});
lightbox.addEventListener("click", () => {
  lightbox.classList.remove("active");
});

// Animated Counters
const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = Math.ceil(target / 200);
    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 15);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
});

// Donation form message
document.getElementById("donationForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your donation! 🎉");
});

// Volunteer form message
document.getElementById("volunteerForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for volunteering! 💌");
});

// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Close menu when a link is clicked
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// Custom cursor
const cursor = document.getElementById("cursor");
const follower = document.getElementById("cursorFollower");
let mx = 0,
  my = 0,
  fx = 0,
  fy = 0;

document.addEventListener("mousemove", (e) => {
  mx = e.clientX;
  my = e.clientY;
  cursor.style.transform = `translate(${mx - 5}px, ${my - 5}px)`;
});

function animateFollower() {
  fx += (mx - fx - 18) * 0.12;
  fy += (my - fy - 18) * 0.12;
  follower.style.transform = `translate(${fx}px, ${fy}px)`;
  requestAnimationFrame(animateFollower);
}
animateFollower();

// Scroll reveal
const reveals = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) e.target.classList.add("visible");
    });
  },
  { threshold: 0.12 },
);
reveals.forEach((el) => observer.observe(el));

// Project card 3D tilt
const projectCards = document.querySelectorAll(".project-card");
projectCards.forEach((card) => {
  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    const rotateX = (y / (rect.height / 2)) * -8;
    const rotateY = (x / (rect.width / 2)) * 8;
    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    card.style.transition = "transform 0.1s ease";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform =
      "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)";
    card.style.transition = "transform 0.4s ease";
  });
});

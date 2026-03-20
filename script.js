// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// Custom cursor
const cursor = document.getElementById("cursor");
const follower = document.getElementById("cursorFollower");
let mx = 0, my = 0, fx = 0, fy = 0;

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
  { threshold: 0.12 }
);
reveals.forEach((el) => observer.observe(el));

// Project card 3D tilt
function applyTilt(card) {
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
    card.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) scale(1)";
    card.style.transition = "transform 0.4s ease";
  });
}

// GitHub API
function getLangColor(lang) {
  const colors = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Python: "#3572A5",
    Java: "#b07219",
    React: "#61dafb",
  };
  return colors[lang] || "#888";
}

async function loadProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  try {
    const response = await fetch(
      "https://api.github.com/users/RamosDev89/repos?sort=updated&per_page=10"
    );
    const repos = await response.json();

    const filtered = repos.filter((repo) => repo.name !== "Personal-Page");

    filtered.forEach((repo) => {
      const langColor = getLangColor(repo.language);

      const card = document.createElement("article");
      card.className = "project-card reveal";
      card.innerHTML = `
        <h3 class="project-title">${repo.name}</h3>
        <div style="display:flex; align-items:center; gap:8px; margin-bottom:16px;">
          <span style="width:12px; height:12px; border-radius:50%; background:${langColor}; display:inline-block; flex-shrink:0;"></span>
          <span class="project-desc" style="margin:0; font-size:13px;">${repo.language || "N/A"}</span>
        </div>
        <a class="project-link btn btn-primary"
          href="${repo.html_url}"
          target="_blank"
          rel="noopener noreferrer">
          Ver projeto
        </a>
      `;

      grid.appendChild(card);

      // aplica scroll reveal no card recém criado
      observer.observe(card);

      // aplica tilt no card recém criado
      applyTilt(card);
    });

  } catch (error) {
    grid.innerHTML = '<p style="color:#888">Failed to load projects.</p>';
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", loadProjects);
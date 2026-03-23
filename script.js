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

// Language colors
function getLangColor(lang) {
  const colors = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Python: "#3572A5",
    Java: "#b07219",
    React: "#61dafb",
    react: "#61dafb",
    nodejs: "#68a063",
    express: "#68a063",
    mysql: "#00758f",
    openweathermap: "#eb6e4b",
    "react-native": "#61dafb",
    typescript: "#3178c6",
    javascript: "#f1e05a",
    html: "#e34c26",
    css: "#563d7c",
    python: "#3572A5",
  };
  return colors[lang] || "#00e5ff";
}

// GitHub API
async function loadProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  try {
    const response = await fetch(
      "https://api.github.com/users/RamosDev89/repos?sort=updated&per_page=10"
    );
    const repos = await response.json();

    const filtered = repos.filter((repo) => repo.name !== "Personal-Page");

    for (const repo of filtered) {
      const langResponse = await fetch(repo.languages_url);
      const languages = await langResponse.json();
      const langNames = Object.keys(languages);

      const topicsResponse = await fetch(
        `https://api.github.com/repos/RamosDev89/${repo.name}/topics`,
        { headers: { Accept: "application/vnd.github.mercy-preview+json" } }
      );
      const topicsData = await topicsResponse.json();
      const topics = topicsData.names || [];

      const tagsToShow = topics.length > 0 ? topics : langNames;

      const card = document.createElement("article");
      card.className = "project-card reveal";
      card.innerHTML = `
        <h3 class="project-title">${repo.name}</h3>
        <div style="display:flex; flex-wrap:wrap; justify-content:center; gap:6px; margin-bottom:16px;">
          ${tagsToShow.map(tag => `
            <span style="display:flex; align-items:center; gap:4px; font-size:12px; color:rgba(245,245,240,0.75);">
              <span style="width:10px; height:10px; border-radius:50%; background:${getLangColor(tag)}; display:inline-block; flex-shrink:0;"></span>
              ${tag}
            </span>
          `).join("")}
        </div>
        <div style="display:flex; justify-content:center; gap: 10px;">
          <a class="project-link btn btn-primary"
            href="${repo.html_url}"
            target="_blank"
            rel="noopener noreferrer">
            Repositório
          </a>
          ${(repo.homepage && repo.homepage.trim() !== "") || (repo.has_pages && repo.name !== "weather-app") ? `
          <a class="project-link btn btn-ghost"
            href="${repo.homepage || `https://${repo.owner.login}.github.io/${repo.name}/`}"
            target="_blank"
            rel="noopener noreferrer">
            Visitar site
          </a>
          ` : ""}
        </div>
      `;

      grid.appendChild(card);
      observer.observe(card);
      applyTilt(card);
    }

  } catch (error) {
    grid.innerHTML = '<p style="color:#888">Failed to load projects.</p>';
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", loadProjects);
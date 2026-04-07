const demoProjects = [
  {
    title: "Creative Portfolio",
    description: "A sleek, modern portfolio with animated hero section and project gallery.",
    category: "portfolio",
    thumbnail: "pc4.png",
    live_demo: "portfolio.html"
  },
  {
    title: "Minimal Blog",
    description: "Clean, responsive blog template with featured posts and sidebar widgets.",
    category: "blog",
    thumbnail: "pc5.jpg",
    live_demo: "minimal blog.html"
  },
  {
    title: "Shop Landing Page",
    description: "Modern e-commerce landing page with product showcase and CTA buttons.",
    category: "ecommerce",
    thumbnail: "pc6.png",
    live_demo: "Landingpage.html"
  },
  {
    title: "Event Conference",
    description: "Stylish event page with schedule, speakers, and registration form.",
    category: "event",
    thumbnail: "pc7.jpg",
    live_demo: "EventConference.html"
  },
  {
    title: "Dashboard UI",
    description: "Interactive dashboard template with charts, sidebar, and dark mode.",
    category: "dashboard",
    thumbnail: "pc8.png",
    live_demo: "dashboard.html"
  }
];

const container = document.querySelector('.demo-projects-container');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');

function renderProjects(projects) {
  container.innerHTML = '';
  projects.forEach(project => {
    const card = document.createElement('div');
    card.className = 'demo-project-card';
    card.innerHTML = `
      <img src="${project.thumbnail}" alt="${project.title}">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.live_demo}" target="_blank" class="btn">Preview</a>
    `;
    container.appendChild(card);
  });
}

// Initial load
renderProjects(demoProjects);

// Search and filter
function filterProjects() {
  const searchText = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  const filtered = demoProjects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchText);
    const matchesCategory = category === 'all' || project.category === category;
    return matchesSearch && matchesCategory;
  });

  renderProjects(filtered);
}

searchInput.addEventListener('input', filterProjects);
categoryFilter.addEventListener('change', filterProjects);
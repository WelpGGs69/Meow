// SDG Cards Structured Layout (id, title, description, color, icon)
const sdgGoals = [
  {
    id: 1,
    title: "No Poverty",
    desc: "End poverty in all its forms everywhere",
    color: "bg-red-600",
    icon: "ri-hand-heart-line",
  },
  {
    id: 2,
    title: "Zero Hunger",
    desc: "End hunger, achieve food security and improved nutrition",
    color: "bg-yellow-500",
    icon: "ri-restaurant-line",
  },
  {
    id: 3,
    title: "Good Health and Well-being",
    desc: "Ensure healthy lives and promote well-being for all",
    color: "bg-green-600",
    icon: "ri-heart-pulse-line",
  },
  {
    id: 4,
    title: "Quality Education",
    desc: "Ensure inclusive and equitable quality education",
    color: "bg-red-700",
    icon: "ri-book-open-line",
  },
  {
    id: 5,
    title: "Gender Equality",
    desc: "Achieve gender equality and empower all women and girls",
    color: "bg-orange-500",
    icon: "ri-women-line",
  },
  {
    id: 6,
    title: "Clean Water and Sanitation",
    desc: "Ensure availability and sustainable management of water",
    color: "bg-blue-400",
    icon: "ri-drop-line",
  },
  {
    id: 7,
    title: "Affordable and Clean Energy",
    desc: "Ensure access to affordable, reliable, sustainable energy",
    color: "bg-yellow-400",
    icon: "ri-flashlight-line",
  },
  {
    id: 8,
    title: "Decent Work and Economic Growth",
    desc: "Promote sustained, inclusive economic growth",
    color: "bg-red-800",
    icon: "ri-briefcase-line",
  },
  {
    id: 9,
    title: "Industry, Innovation and Infrastructure",
    desc: "Build resilient infrastructure, promote innovation",
    color: "bg-orange-600",
    icon: "ri-building-line",
  },
  {
    id: 10,
    title: "Reduced Inequalities",
    desc: "Reduce inequality within and among countries",
    color: "bg-pink-500",
    icon: "ri-scales-line",
  },
  {
    id: 11,
    title: "Sustainable Cities and Communities",
    desc: "Make cities and human settlements inclusive and sustainable",
    color: "bg-orange-400",
    icon: "ri-community-line",
  },
  {
    id: 12,
    title: "Responsible Consumption and Production",
    desc: "Ensure sustainable consumption and production patterns",
    color: "bg-yellow-600",
    icon: "ri-recycle-line",
  },
  {
    id: 13,
    title: "Climate Action",
    desc: "Take urgent action to combat climate change",
    color: "bg-green-700",
    icon: "ri-temp-hot-line",
  },
  {
    id: 14,
    title: "Life Below Water",
    desc: "Conserve and sustainably use oceans and marine resources",
    color: "bg-blue-600",
    icon: "ri-water-flash-line",
  },
  {
    id: 15,
    title: "Life on Land",
    desc: "Protect, restore and promote sustainable use of ecosystems",
    color: "bg-green-500",
    icon: "ri-leaf-line",
  },
  {
    id: 16,
    title: "Peace, Justice and Strong Institutions",
    desc: "Promote peaceful and inclusive societies",
    color: "bg-blue-800",
    icon: "ri-scales-3-line",
  },
  {
    id: 17,
    title: "Partnerships for the Goals",
    desc: "Strengthen global partnership for sustainable development",
    color: "bg-blue-900",
    icon: "ri-team-line",
  },
];

// populate goals grid
const goalsGrid = document.getElementById("goalsGrid");

let activeGoal = null;

function renderGoals() {
  goalsGrid.innerHTML = "";
  sdgGoals.forEach((g) => {
    const card = document.createElement("div");
    card.className = `goal ${g.color}`;
    card.setAttribute("data-id", g.id);

    const meta = document.createElement("div");
    meta.className = "meta";
    meta.innerHTML = `<span class="num">${g.id}</span><div class="icon"><i class="${g.icon}" style="font-size:1.25rem"></i></div>`;

    const h = document.createElement("h4");
    h.textContent = g.title;

    const p = document.createElement("p");
    p.textContent = g.desc;
    p.className = "desc";

    card.appendChild(meta);
    card.appendChild(h);
    card.appendChild(p);

    // more section that appears when active
    const more = document.createElement("div");
    more.className = "more";
    more.style.display = "none";
    more.innerHTML = `<button class="btn outline more-btn">Learn More</button>`;
    card.appendChild(more);

    card.addEventListener("click", () => {
      const id = g.id;
      if (activeGoal === id) {
        activeGoal = null;
      } else {
        activeGoal = id;
      }
      updateActive();
    });

    goalsGrid.appendChild(card);
  });
}

function updateActive() {
  document.querySelectorAll(".goal").forEach((el) => {
    const id = Number(el.getAttribute("data-id"));
    const more = el.querySelector(".more");
    const desc = el.querySelector(".desc");
    if (activeGoal === id) {
      more.style.display = "block";
      desc.style.maxHeight = "none";
    } else {
      more.style.display = "none";
      desc.style.webkitLineClamp = "2";
      desc.style.display = "-webkit-box";
      desc.style.webkitBoxOrient = "vertical";
      desc.style.overflow = "hidden";
    }
  });
}

// scroll buttons
document.getElementById("exploreBtn").addEventListener("click", () => {
  document.getElementById("goals").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("actionBtn").addEventListener("click", () => {
  document.getElementById("call").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("home").addEventListener("click", () => {
  document.getElementById("hero").scrollIntoView({ behavior: "smooth" });
});

// set year in footer
document.getElementById("year").textContent = new Date().getFullYear();

renderGoals();
updateActive();
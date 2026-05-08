/**
 * Skill categories — single source for sidebar (desktop) and main (mobile) pill lists.
 * Classic script (no import/export) so it runs under file://, static hosting, and previews.
 */
(function () {
  var FRONTEND_SKILLS = [
    "React.js",
    "Vue.js (Vue 3)",
    "Nuxt.js",
    "HTML5",
    "JavaScript",
    "TypeScript",
    "CSS",
    "SCSS",
    "Tailwind CSS",
  ];

  var ARCHITECTURE_SKILLS = [
    "SPA",
    "SSR",
    "Micro-frontends",
    "Component-driven design",
    "Vite",
    "State management",
    "Design systems",
    "WebSockets",
    "Responsive design",
    "Cross-browser compatibility",
  ];

  var PERFORMANCE_SKILLS = [
    "Lazy loading",
    "Code splitting",
    "Rendering optimization",
    "Caching",
    "DOM virtualization",
  ];

  var AI_SKILLS = ["LLMs", "LangChain", "AI agents", "Prompt engineering"];

  var TOOLS = [
    "REST APIs",
    "GraphQL",
    "Git",
    "CI/CD",
    "Jest",
    "Chromatic",
    "Firebase",
    "Unit testing",
    "Storybook",
  ];

  var DOMAINS = [
    "Fintech",
    "Subscription billing",
    "Usage-based billing",
    "Product catalog",
    "Metering",
  ];

  /** Labels align with Core skills section; arrays are the single source of truth. */
  var RESUME_SKILL_CATEGORIES = [
    { title: "Frontend", skills: FRONTEND_SKILLS },
    { title: "Architecture", skills: ARCHITECTURE_SKILLS },
    { title: "Performance", skills: PERFORMANCE_SKILLS },
    { title: "AI & automation", skills: AI_SKILLS },
    { title: "Tools", skills: TOOLS },
    { title: "Domains", skills: DOMAINS },
  ];

  function fillCategorizedSkills(root) {
    if (!root) return;
    var isInline = !!root.closest(".skills-inline");
    root.textContent = "";
    for (var c = 0; c < RESUME_SKILL_CATEGORIES.length; c++) {
      var cat = RESUME_SKILL_CATEGORIES[c];
      var sectionEl = document.createElement("section");
      sectionEl.className = "skill-category-group";
      sectionEl.setAttribute("aria-label", cat.title);

      var heading = document.createElement("h2");
      heading.className = isInline
        ? "section-title skill-category-heading"
        : "sidebar-section-title skill-category-heading";
      heading.textContent = cat.title;

      var wrap = document.createElement("div");
      wrap.className = "pill-wrap";
      if (!isInline) {
        wrap.setAttribute("data-desktop-only", "");
      }
      for (var i = 0; i < cat.skills.length; i++) {
        var pill = document.createElement("span");
        pill.className = "pill";
        pill.textContent = cat.skills[i];
        wrap.appendChild(pill);
      }
      sectionEl.appendChild(heading);
      sectionEl.appendChild(wrap);
      root.appendChild(sectionEl);
    }
  }

  function run() {
    fillCategorizedSkills(
      document.querySelector(".sidebar [data-skill-pills]"),
    );
    fillCategorizedSkills(
      document.querySelector(".skills-inline [data-skill-pills]"),
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();

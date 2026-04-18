/**
 * Stack labels — single source for sidebar (desktop) and main (mobile) skill pills.
 * Classic script (no import/export) so it runs under file://, static hosting, and previews.
 */
(function () {
  var RESUME_SKILL_PILLS = [
    "Prompt Engineering",
    "Vue / React / Nuxt",
    "JavaScript / Typescript",
    "HTML",
    "CSS / SCSS / Tailwind",
    "Chromatic / Storybook / Jest",
    "Git",
    "Firebase / Vercel",
  ];

  function fillSkillPills(root) {
    if (!root) return;
    root.textContent = "";
    for (var i = 0; i < RESUME_SKILL_PILLS.length; i++) {
      var span = document.createElement("span");
      span.className = "pill";
      span.textContent = RESUME_SKILL_PILLS[i];
      root.appendChild(span);
    }
  }

  function run() {
    fillSkillPills(
      document.querySelector(
        ".sidebar .pill-wrap[data-desktop-only][data-skill-pills]",
      ),
    );
    fillSkillPills(
      document.querySelector(".skills-inline .pill-wrap[data-skill-pills]"),
    );
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();

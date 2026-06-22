(() => {
  "use strict";

  const data = window.portfolioData;

  const $ = (selector, scope = document) =>
    scope.querySelector(selector);

  const $$ = (selector, scope = document) =>
    [...scope.querySelectorAll(selector)];

  const escapeHtml = (value = "") =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  function renderInterests() {
    $("#interestList").innerHTML = data.researchInterests
      .map(item => `<span class="chip">${escapeHtml(item)}</span>`)
      .join("");
  }

  function renderFilters(containerId, items, key, onSelect) {
    const container = $(containerId);

    const values = [
      "All",
      ...new Set(items.map(item => item[key]))
    ];

    container.innerHTML = values
      .map(
        (value, index) => `
          <button
            class="filter-button ${index === 0 ? "active" : ""}"
            type="button"
            data-filter="${escapeHtml(value)}"
          >
            ${escapeHtml(value)}
          </button>
        `
      )
      .join("");

    $$(".filter-button", container).forEach(button => {
      button.addEventListener("click", () => {
        $$(".filter-button", container).forEach(item =>
          item.classList.remove("active")
        );

        button.classList.add("active");
        onSelect(button.dataset.filter);
      });
    });
  }

  function publicationLinks(publication) {
    const links = [];

    if (publication.paperUrl) {
      links.push(`
        <a
          class="card-link"
          href="${escapeHtml(publication.paperUrl)}"
          target="_blank"
          rel="noreferrer"
        >
          Published paper ↗
        </a>
      `);
    }

    if (publication.codeUrl) {
      links.push(`
        <a
          class="card-link"
          href="${escapeHtml(publication.codeUrl)}"
          target="_blank"
          rel="noreferrer"
        >
          Code ↗
        </a>
      `);
    }

    if (!links.length) {
      const subject = encodeURIComponent(
        `Research inquiry: ${publication.title}`
      );

      links.push(`
        <a
          class="card-link"
          href="mailto:aab.reshan@gmail.com?subject=${subject}"
        >
          Request details →
        </a>
      `);
    }

    return links.join("");
  }

  function statusClass(status) {
    if (status === "Published") {
      return "status-published";
    }

    if (status === "Under Review") {
      return "status-review";
    }

    return "status-preparation";
  }

  function renderPublications(filter = "All") {
    const visible =
      filter === "All"
        ? data.publications
        : data.publications.filter(
          item => item.status === filter
        );

    $("#publicationGrid").innerHTML = visible
      .map(
        publication => `
          <article class="card reveal visible">
            <p class="card-kicker">
              ${escapeHtml(publication.type)}
              ·
              ${escapeHtml(publication.date)}
            </p>

            <h3>${escapeHtml(publication.title)}</h3>

            <p>${escapeHtml(publication.summary)}</p>

            ${publication.authors
            ? `
                  <p>
                    <strong>Authors:</strong>
                    ${escapeHtml(publication.authors)}
                  </p>
                `
            : ""
          }

            <div class="card-meta">
              <span
                class="status-badge ${statusClass(publication.status)}"
              >
                ${escapeHtml(publication.status)}
              </span>

              <span>${escapeHtml(publication.venue)}</span>
            </div>

            <div class="card-links">
              ${publicationLinks(publication)}
            </div>
          </article>
        `
      )
      .join("");
  }

  function githubLinks(project, className = "card-link") {
    const links = [];

    if (project.githubUrl) {
      links.push(`
        <a
          class="${className}"
          href="${escapeHtml(project.githubUrl)}"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
      `);
    }

    (project.githubUrls || []).forEach(item => {
      if (!item.url) {
        return;
      }

      links.push(`
        <a
          class="${className}"
          href="${escapeHtml(item.url)}"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ${escapeHtml(item.label || "Repository")} ↗
        </a>
      `);
    });

    return links;
  }

  function projectLinks(project, index) {
    const links = [
      `
        <button
          class="card-link details-button"
          type="button"
          data-project-index="${index}"
        >
          View details →
        </button>
      `
    ];

    links.push(...githubLinks(project));

    if (project.screenshotsUrl) {
      links.push(`
        <a
          class="card-link"
          href="${escapeHtml(project.screenshotsUrl)}"
          target="_blank"
          rel="noreferrer"
        >
          Screenshots ↗
        </a>
      `);
    }

    if (project.videoUrl) {
      links.push(`
        <a
          class="card-link"
          href="${escapeHtml(project.videoUrl)}"
          target="_blank"
          rel="noreferrer"
        >
          Video ↗
        </a>
      `);
    }

    if (project.releaseUrl) {
      links.push(`
        <a
          class="card-link"
          href="${escapeHtml(project.releaseUrl)}"
          target="_blank"
          rel="noreferrer"
        >
          APK / Release ↗
        </a>
      `);
    }

    if (project.demoUrl) {
      links.push(`
        <a
          class="card-link"
          href="${escapeHtml(project.demoUrl)}"
          target="_blank"
          rel="noreferrer"
        >
          Live demo ↗
        </a>
      `);
    }

    return links.join("");
  }

  function renderProjects(filter = "All") {
    const indexedProjects = data.projects.map(
      (project, index) => ({
        project,
        index
      })
    );

    const visible =
      filter === "All"
        ? indexedProjects
        : indexedProjects.filter(
          item => item.project.category === filter
        );

    $("#projectGrid").innerHTML = visible
      .map(
        ({ project, index }) => `
          <article class="card project-card reveal visible">
            <div class="project-body">
              <p class="card-kicker">
                ${escapeHtml(project.category)}
                ·
                ${escapeHtml(project.date)}
              </p>

              <h3>${escapeHtml(project.title)}</h3>

              <p>${escapeHtml(project.summary)}</p>

              <div class="tech-row">
                ${(project.technologies || [])
            .map(
              technology => `
                      <span class="tech">
                        ${escapeHtml(technology)}
                      </span>
                    `
            )
            .join("")}
              </div>

              <div class="card-links">
                ${projectLinks(project, index)}
              </div>
            </div>
          </article>
        `
      )
      .join("");

    $$("[data-project-index]").forEach(button => {
      button.addEventListener("click", () => {
        openProject(
          Number(button.dataset.projectIndex)
        );
      });
    });
  }

  function renderExperience() {
    $("#experienceTimeline").innerHTML = data.experience
      .map(
        item => `
          <article class="timeline-item reveal">
            <span
              class="timeline-dot"
              aria-hidden="true"
            ></span>

            <div class="timeline-head">
              <h3>${escapeHtml(item.role)}</h3>
              <time>${escapeHtml(item.period)}</time>
            </div>

            <p class="timeline-company">
              ${escapeHtml(item.company)}
            </p>

            <ul>
              ${(item.bullets || [])
            .map(
              bullet => `
                    <li>${escapeHtml(bullet)}</li>
                  `
            )
            .join("")}
            </ul>
          </article>
        `
      )
      .join("");
  }

  function renderAchievements() {
    $("#achievementGrid").innerHTML = data.achievements
      .map(
        item => `
          <article
            class="achievement-card reveal ${item.featured ? "featured" : ""
          }"
          >
            <h3>${escapeHtml(item.title)}</h3>

            <p>${escapeHtml(item.detail)}</p>

            ${item.certificateUrl
            ? `
                  <a
                    class="card-link certificate-link"
                    href="${escapeHtml(item.certificateUrl)}"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View certificate ↗
                  </a>
                `
            : ""
          }
          </article>
        `
      )
      .join("");
  }

  function renderSkills() {
    $("#skillGrid").innerHTML = data.skillGroups
      .map(
        group => `
          <article class="skill-card reveal">
            <h3>${escapeHtml(group.title)}</h3>

            <div>
              ${(group.items || [])
            .map(
              item => `
                    <span class="tech">
                      ${escapeHtml(item)}
                    </span>
                  `
            )
            .join("")}
            </div>
          </article>
        `
      )
      .join("");
  }

  function openProject(index) {
    const project = data.projects[index];

    if (!project) {
      return;
    }

    const externalLinks = [
      ...githubLinks(
        project,
        "button secondary small"
      ),

      project.screenshotsUrl
        ? `
          <a
            class="button secondary small"
            href="${escapeHtml(project.screenshotsUrl)}"
            target="_blank"
            rel="noreferrer"
          >
            View screenshots
          </a>
        `
        : "",

      project.videoUrl
        ? `
          <a
            class="button secondary small"
            href="${escapeHtml(project.videoUrl)}"
            target="_blank"
            rel="noreferrer"
          >
            Watch video
          </a>
        `
        : "",

      project.releaseUrl
        ? `
          <a
            class="button secondary small"
            href="${escapeHtml(project.releaseUrl)}"
            target="_blank"
            rel="noreferrer"
          >
            APK / Release
          </a>
        `
        : "",

      project.demoUrl
        ? `
          <a
            class="button primary small"
            href="${escapeHtml(project.demoUrl)}"
            target="_blank"
            rel="noreferrer"
          >
            Open demo
          </a>
        `
        : ""
    ]
      .filter(Boolean)
      .join("");

    const inquirySubject = encodeURIComponent(
      `Project inquiry: ${project.title}`
    );

    $("#dialogContent").innerHTML = `
      <div class="dialog-content">
        <p class="card-kicker">
          ${escapeHtml(project.category)}
          ·
          ${escapeHtml(project.date)}
        </p>

        <h2>${escapeHtml(project.title)}</h2>

        <p>${escapeHtml(project.summary)}</p>

        <h3>Highlights</h3>

        <ul class="dialog-list">
          ${(project.highlights || [])
        .map(
          item => `
                <li>${escapeHtml(item)}</li>
              `
        )
        .join("")}
        </ul>

        <div class="tech-row">
          ${(project.technologies || [])
        .map(
          technology => `
                <span class="tech">
                  ${escapeHtml(technology)}
                </span>
              `
        )
        .join("")}
        </div>

        <div class="hero-actions">
          ${externalLinks ||
      `
              <a
                class="button secondary small"
                href="mailto:aab.reshan@gmail.com?subject=${inquirySubject}"
              >
                Request project details
              </a>
            `
      }
        </div>
      </div>
    `;

    const dialog = $("#projectDialog");

    dialog.showModal();
    document.body.classList.add("dialog-open");
  }

  function setupDialog() {
    const dialog = $("#projectDialog");
    const closeButton = $("#dialogClose");

    closeButton.addEventListener("click", () => {
      dialog.close();
    });

    dialog.addEventListener("click", event => {
      const bounds = dialog.getBoundingClientRect();

      const outside =
        event.clientX < bounds.left ||
        event.clientX > bounds.right ||
        event.clientY < bounds.top ||
        event.clientY > bounds.bottom;

      if (outside) {
        dialog.close();
      }
    });

    dialog.addEventListener("close", () => {
      document.body.classList.remove("dialog-open");
    });
  }

  function setupNavigation() {
    const toggle = $("#navToggle");
    const links = $("#navLinks");

    toggle.addEventListener("click", () => {
      const isOpen = links.classList.toggle("open");

      toggle.setAttribute(
        "aria-expanded",
        String(isOpen)
      );
    });

    $$("a", links).forEach(link => {
      link.addEventListener("click", () => {
        links.classList.remove("open");

        toggle.setAttribute(
          "aria-expanded",
          "false"
        );
      });
    });
  }

  function setupReveal() {
    if (!("IntersectionObserver" in window)) {
      $$(".reveal").forEach(item =>
        item.classList.add("visible")
      );

      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12
      }
    );

    $$(".reveal").forEach(item =>
      observer.observe(item)
    );
  }

  function setupProgress() {
    window.addEventListener(
      "scroll",
      () => {
        const maximum =
          document.documentElement.scrollHeight -
          window.innerHeight;

        const value =
          maximum > 0
            ? (window.scrollY / maximum) * 100
            : 0;

        $("#scrollProgress").style.width =
          `${value}%`;
      },
      {
        passive: true
      }
    );
  }

  renderInterests();

  renderFilters(
    "#publicationFilters",
    data.publications,
    "status",
    renderPublications
  );

  renderPublications();

  renderFilters(
    "#projectFilters",
    data.projects,
    "category",
    renderProjects
  );

  renderProjects();
  renderExperience();
  renderAchievements();
  renderSkills();

  setupDialog();
  setupNavigation();
  setupProgress();

  $("#currentYear").textContent =
    new Date().getFullYear();

  setupReveal();
})();
const portfolioSections = [
  {
    title: "MOODLE MONTH 1 - PYTHON",
    id: "pythonMonth1",
    items: [
      {
        name: "MOODLE WEEK 1",
        links: [
          { text: "Flow Chart", url: "https://github.com/Ismael-Vasco/m1_python_moodle_week_1/blob/main/diagrama_flijo.png" },
          { text: "Inventory", url: "https://github.com/Ismael-Vasco/m1_python_moodle_week_1/blob/main/Inventary.py" }
        ]
      },
      {
        name: "MOODLE WEEK 2",
        links: [
          { text: "Flow control and inventory list handling", url: "https://github.com/Ismael-Vasco/m1_python_moodle_week_2" }
        ]
      },
      {
        name: "MOODLE WEEK 3",
        links: [
          { text: "Flow Chart", url: "https://github.com/Ismael-Vasco/m1_moodle_week_3/blob/main/WEEK_3_FLOWCHART.png" },
          { text: "Inventory with files & folders", url: "https://github.com/Ismael-Vasco/m1_moodle_week_3/blob/main/app.py" }
        ]
      }
    ]
  },

  {
    title: "MOODLE MONTH 2 - HTML & CSS",
    id: "htmlCssMonth2",
    items: [
      {
        name: "MOODLE WEEK 1",
        links: [
          { text: "Exercises Description", url: "https://github.com/Ismael-Vasco/m2-moodle_html_css_week_1/blob/main/README.MD" },
          { text: "Portfolio HTML & CSS", url: "https://ismael-vasco.github.io/m2-moodle_html_css_week_1/" }
        ]
      },
      {
        name: "MOODLE WEEK 2",
        links: [
          { text: "Exercises Description", url: "https://github.com/Ismael-Vasco/m2-moodle_html_css_week_2/blob/main/README.md" },
          { text: "Portfolio HTML & CSS", url: "https://ismael-vasco.github.io/m2-moodle_html_css_week_2/" }
        ]
      }
    ]
  },

  {
    title: "HUBBLE GROUP",
    id: "hubble",
    items: [
      {
        name: "Bootstrap Events Page",
        links: [
          { text: "Events Page", url: "https://hubble-riiwii.github.io/proyecto-eventos-hubble/" },
          { text: "Admin Page", url: "https://hubble-riiwii.github.io/proyecto-eventos-hubble/admin/login/index.html" }
        ]
      }
    ]
  },

  {
    title: "MOODLE MONTH 3 - JAVASCRIPT",
    id: "javascriptMonth3",
    items: [
      {
        name: "MOODLE WEEK 1",
        links: [
          { text: "Description", url: "https://github.com/Ismael-Vasco/M3_Moodle_week_1_JS/tree/main" },
          { text: "Live Demo", url: "https://ismael-vasco.github.io/M3_Moodle_week_1_JS/" }
        ]
      },
      {
        name: "MOODLE WEEK 2",
        links: [
          { text: "Description", url: "https://github.com/Ismael-Vasco/M3_Moodle_week_2_JS/tree/main" },
          { text: "Live Demo", url: "https://ismael-vasco.github.io/M3_Moodle_week_2_JS/" }
        ]
      }
    ]
  }
];

const container = document.getElementById("portfolioContent");

portfolioSections.forEach(section => {
  container.innerHTML += `
    <section class="mb-5">
      <h2 class="text-info mb-4">${section.title}</h2>

      <div id="${section.id}" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">

          ${section.items.map((item, index) => `
            <div class="carousel-item ${index === 0 ? "active" : ""}">
              <div class="row justify-content-center">
                <div class="col-md-6 col-lg-4">
                  <div class="card bg-black text-light border-secondary h-100">
                    <div class="card-body">
                      <h5 class="card-title">${item.name}</h5>
                      <ul class="list-unstyled mt-3">
                        ${item.links.map(link => `
                          <li class="mb-2">
                            <a href="${link.url}" target="_blank" class="link-info">
                              ${link.text}
                            </a>
                          </li>
                        `).join("")}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `).join("")}

        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#${section.id}" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </button>

        <button class="carousel-control-next" type="button" data-bs-target="#${section.id}" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
    </section>
  `;
});

const portfolioSections = [
  // Trains
  {
    title: "HUBBLE GROUP",
    id: "hubble",
    items: [
      {
        name: "Events Platform",
        image: "../assets/img/trains/m2_hubble/hubble-events.png",
        description: "Events platform with admin panel built using Bootstrap.",
        tech: ["html5", "css3", "bootstrap", "js", "github"],
        links: [
          {
            text: "Events Page",
            url: "https://hubble-riiwii.github.io/proyecto-eventos-hubble/"
          },
          {
            text: "Admin Panel",
            url: "https://hubble-riiwii.github.io/proyecto-eventos-hubble/admin/login/index.html"
          },
          {
            text: "Repository",
            url: "https://github.com/Hubble-Riiwii/proyecto-eventos-hubble"
          },
          {
            text: "README",
            url: "https://github.com/Hubble-Riiwii/proyecto-eventos-hubble/blob/main/README.md"
          }
        ]
      },
      {
        name: "Cars CRUD",
        image: "../assets/img/trains/m2_hubble/cars-crud.png",
        description: "Platform built using Bootstrap and Javascript with Json-server.",
        tech: ["html5", "css3", "bootstrap", "js", "json", "github"],
        links: [
          {
            text: "Landing Page",
            url: "https://hubble-riiwii.github.io/cars-crud/"
          },
          {
            text: "Repository",
            url: "https://github.com/Hubble-Riiwii/cars-crud"
          },
          {
            text: "README",
            url: "https://github.com/Hubble-Riiwii/cars-crud/blob/main/README.md"
          }
        ]
      },
      {
        name: "CRUDVentory Landing Page",
        image: "../assets/img/trains/m2_hubble/toolstore.png",
        description: "Platform built using Bootstrap and Javascript with Json-server.",
        tech: ["html5", "css3", "bootstrap", "js", "json", "github"],
        links: [
          {
            text: "Front",
            url: "https://github.com/Hubble-Riiwii/CrudVentory/tree/Develop/Front"
          },
          {
            text: "Back",
            url: "https://github.com/Hubble-Riiwii/CrudVentory/tree/Develop/Back"
          },
          {
            text: "README",
            url: "https://github.com/Hubble-Riiwii/CrudVentory/blob/Develop/README.md"
          },
          {
            text: "REQUETS",
            url: "https://github.com/Hubble-Riiwii/CrudVentory/blob/Develop/REQUESTS.md"
          }
        ]
      },
      {
        name: "CRUDVentory Admin Page",
        image: "../assets/img/trains/m2_hubble/toolstore-admin.png",
        description: "Platform built using Bootstrap and Javascript with Json-server.",
        tech: ["html5", "css3", "bootstrap", "js", "json", "github"],
        links: [
          {
            text: "Front",
            url: "https://github.com/Hubble-Riiwii/CrudVentory/tree/Develop/Front"
          },
          {
            text: "Back",
            url: "https://github.com/Hubble-Riiwii/CrudVentory/tree/Develop/Back"
          },
          {
            text: "Repository",
            url: "https://github.com/Hubble-Riiwii/CrudVentory/tree/Develop"
          },
          {
            text: "README",
            url: "https://github.com/Hubble-Riiwii/CrudVentory/blob/Develop/README.md"
          },
          {
            text: "REQUETS",
            url: "https://github.com/Hubble-Riiwii/CrudVentory/blob/Develop/REQUESTS.md"
          }
        ]
      }
    ]
  },
];

const techIcons = {
  python: "bi-filetype-py",
  html5: "bi-filetype-html",
  css3: "bi-filetype-css",
  js: "bi-filetype-js",
  bootstrap: "bi-bootstrap",
  github: "bi-github",
  json: "bi-filetype-json"
};

const container = document.getElementById("portfolioContent");

portfolioSections.forEach(section => {
  container.innerHTML += `
    <section class="mb-5">
      <h2 class="text-white fw-bold mb-4">${section.title}</h2>

      <div id="${section.id}" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">

          ${section.items.map((item, index) => `
            <div class="carousel-item ${index === 0 ? "active" : ""}">
              <div class="row justify-content-center">
                <div class="col-md-6 col-lg-4">

                  <div class="card bg-light text-light border-0 shadow-lg h-100">

                    <img 
                      src="${item.image}" 
                      class="card-img-top" 
                      alt="${item.name}"
                      style="object-fit: cover; height: 200px;"
                    >

                    <div class="card-body">
                      <h5 class="card-title text-info">${item.name}</h5>

                      <p class="card-text small text-black">
                        ${item.description}
                      </p>

                      <div class="mb-3">
                        ${item.tech.map(t => `
                          <i 
                            class="bi ${techIcons[t] || "bi-code-slash"} fs-4 me-2 text-info"
                            title="${t.toUpperCase()}"
                          ></i>
                        `).join("")}
                      </div>


                      <div class="d-flex flex-wrap gap-2">
                        ${item.links.map(link => `
                          <a 
                            href="${link.url}" 
                            target="_blank" 
                            class="btn btn-outline-info btn-sm"
                          >
                            ${link.text}
                          </a>
                        `).join("")}
                      </div>
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

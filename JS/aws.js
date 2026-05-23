const portfolioSections = [
  {
    title: "AWS CLOUD PROJECTS",
    id: "awsProjects",
    items: [
      {
        name: "IAM Security and Role Segregation Workshop",
        image: "../assets/img/aws/aws-IAM.png",
        description: "implementation of a secure and scalable AWS IAM architecture based on the Principle of Least Privilege and Role Segregation.",
        tech: ["aws", "github"],
        links: [
          {
            text: "Repository",
            url: "https://github.com/AWS-Personal-Projects/IAM-Config/tree/main/IAM-EXCERCISE"
          }
        ]
      }
    ]
  }
];

const techIcons = {
  python: "bi-filetype-py",
  html5: "bi-filetype-html",
  css3: "bi-filetype-css",
  js: "bi-filetype-js",
  bootstrap: "bi-bootstrap",
  github: "bi-github",
  json: "bi-filetype-json",
  sql: "bi-filetype-sql",
  csharp: "bi-code-slash",
  django: "bi-filetype-py",
  aws: "bi-cloud-fill"
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
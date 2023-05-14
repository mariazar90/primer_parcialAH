import * as service from "../services/projects.services.js";
import * as view from "../views/projects.views.js";

function getProjects(req, res) {
  service.getProjects().then(function (projects) {
    res.send(view.createProjectsHome(projects));
  });
}

function getProjectBySection(req, res) {
  let section = req.params.section;

  service.getProjectBySection(section).then(function (project) {
    if (project) {
      res.send(view.createProjectPage(project));
    } else {
      res.send(view.createPage("Error", "<p>Proyecto no encontrado</p>"));
    }
  });
}

function createProject(req, res) {
  const project = {
    name: req.body.name,
    description: req.body.description,
    link: req.body.link,
    img: req.body.img,
    technologies: req.body.technologies,
    section: req.body.section,
  };

  service
    .createProject(project)
    .then(function (newProject) {
      res.send(
        view.createPage(
          "Nuevo Proyecto",
          `<p>Se creó el Proyecto ${newProject.name}</p>`
        )
      );
    })
    .catch(function (err) {
      res.send(view.createPage("Error"));
    });
}

function editProject(req, res) {
  const section = req.params.section;

  const project = {
    name: req.body.name,
    description: req.body.description,
    link: req.body.link,
    img: req.body.img,
    technologies: req.body.technologies,
    section: req.body.section,
  };

  service.editProject(section, project).then(function (project) {
    if (project) {
      res.send(view.createPage("Projecto editado"));
    } else {
      res.send(view.createPage("No se encontró la sección"));
    }
  });
}

function deleteProject(req, res) {
  const section = req.params.section;
  service.deleteProject(section).then(function (project) {
    if (project) {
      res.send(view.createPage("Projecto eliminado"));
    } else {
      res.send(view.createPage("No se encontró el proyecto"));
    }
  });
}

export {
  getProjects,
  getProjectBySection,
  createProject,
  editProject,
  deleteProject,
};

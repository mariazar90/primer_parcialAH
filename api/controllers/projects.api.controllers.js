import * as service from "../../services/projects.services.js";

function getProjects(req, res) {
  service.getProjects({ deleted: true }).then(function (projects) {
    res.status(200).json(projects);
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

  service.createProject(project).then(function (project) {
    res.status(201).json(project);
  });
}

function getProjectBySection(req, res) {
  const section = req.params.section;

  service.getProjectBySection(section).then(function (project) {
    if (project) {
      res.status(200).json(project);
    } else {
      res
        .status(404)
        .json({ error: { message: "No se ha encontrado la sección" } });
    }
  });
}

function replaceProject(req, res) {
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
      res.status(200).json(project);
    } else {
      res.status(404).json({ error: { message: "No se pudo editar" } });
    }
  });
}

function updateProduct(req, res) {
  const section = req.params.section;

  const project = {};
  if (req.body.name) {
    project.name = req.body.name;
  }
  if (req.body.description) {
    project.description = req.body.description;
  }
  if (req.body.link) {
    project.link = req.body.link;
  }
  if (req.body.img) {
    project.img = req.body.img;
  }
  if (req.body.technologies) {
    project.technologies = req.body.technologies;
  }
  if (req.body.section) {
    project.section = req.body.section;
  }

  service.editProject(section, project).then(function (project) {
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ error: { message: "No se pudo editar" } });
    }
  });
}

function deleteProject(req, res) {
  const section = req.params.section;

  service.deleteProject(section).then(function (project) {
    if (project) {
      res.status(200).json(project);
    } else {
      res.status(404).json({ error: { message: "No se pudo borrar" } });
    }
  });
}

export {
  getProjects,
  createProject,
  getProjectBySection,
  replaceProject,
  updateProduct,
  deleteProject,
};

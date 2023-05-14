import { MongoClient} from 'mongodb'

const client = new MongoClient("mongodb://127.0.0.1:27017")
const db = client.db("AH20231CP1")
const projects = db.collection("Projects")

  async function getProjects(filter={}) {
  await client.connect()
  const filterTech = {deleted: { $ne : true}}

  if (filter?.technologies){
    filterTech.technologies = {$all: filter.technologies.split("+") }
  }

  return projects.find(filterTech).toArray()
}
  
  async function getProjectBySection(section){
  await client.connect()
  return projects.findOne({section})
  }

  async function createProject(project){
    await client.connect()
    await projects.insertOne(project)
    return project
 }

async function editProject(section, project){
    await client.connect()
    await projects.updateOne({section},{$set: project})
    return project
  }

async function replaceProject(section, project){
    await client.connect()
    await projects.replaceOne({section, project})
    return project
  }
  
async function deleteProject(section){
  await client.connect()
  await projects.deleteOne({section})
  return {
    section
  }
  }

  export{
    getProjectBySection,
    getProjects,
    createProject,
    editProject, 
    replaceProject,
    deleteProject
  }
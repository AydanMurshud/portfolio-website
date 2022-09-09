const Project = require('./../models/project')
const express = require('express')
const project = require('./../models/project')
const router = express.Router()



/* Create a project */
router.post('/', async (req, res) => {
    const project = new Project({
        title: req.body.title,
        description: req.body.description
    })
    try {
        const newProject = await project.save()
        res.status(201).json(newProject)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})
/* Get all projets */
router.get('/', async (req, res) => {
    try {
        const projects = await Project.find()
        res.json(projects)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
/* Get specific projects */
router.get('/:id', getProject, (req, res) => {
    res.json(res.project)
})
/* Update a project */
router.patch('/:id', getProject, async(req, res) => {
    if (req.body.title != null) {
        res.project.title = req.body.title
    }
    if (req.body.description != null) {
        res.project.description = req.body.description
    }
    try {
        const updatedProject =await res.project.save()
        res.json()
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
})
/* Delete a project */
router.delete('/:id', getProject, async (req, res) => {
    try {
        await res.project.remove()
        res.send({ message: `${res.project.title} removed` })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

/* midlewere */
async function getProject(req, res, next) {
    let project;
    try {
        project = await Project.findById(req.params.id)
        if (project == null) {
            return res.status(404).json({ message: "uh...I don't know where that is o.0" })
        } else {

        }
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
    res.project = project
    next()
}

module.exports = router
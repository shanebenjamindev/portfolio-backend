const projectService = require('../services/projectService')

const addProject = async (req, res) => {
    try {
        const { title, description } = req.body
        const response = await projectService.addProject(req.body)
        return res.status(200).json(response)
    } catch (e) {
        return res.status(404).json({
            message: e
        })
    }
}

module.exports = {
    addProject
}
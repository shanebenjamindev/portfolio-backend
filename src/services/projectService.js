const Project = require('../models/projectModel')

const addProject = (newProject) => {
    return new Promise(async (resolve, reject) => {
        const { title, description } = newProject
        try {
            console.log("res" + title, description);
            const checkProject = await Project.findOne({
                title: title
            })
            if (checkProject !== null) {
                resolve({
                    status: 'ERR',
                    message: 'The project is already exit'
                })
            }
            const addProject = await Project.create({
                title,
                description
            })
            if (addProject) {
                resolve({
                    status: 'OK',
                    message: 'SUCCESS',
                    data: addProject
                })
            }
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    addProject,
}
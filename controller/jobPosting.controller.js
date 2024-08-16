import { validationResult } from "express-validator";
import Project from "../model/project.model.js";


export const posting = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(401).json({ error: "Bad request", errors });
        }

        const { projectName, jobTitle, description, date, skills, budget, deadline } = req.body;

        let result = await Project.create({ projectName, jobTitle, description, date, skills, budget, deadline });
        if (result) {
            return res.status(200).json({ message: "Job Posted Successfully", result });
        }
        else {
            return res.status(500).json({ error: "Internal Server Problem" })
        }
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({ error: "Internal Server Problem ! Try Again" })
    }
}

export const updatePost = async (req, res, next) => {
    try {
        const id = req.params.id;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(401).json({ message: "Bad Request" })
        }
        const { projectName, jobTitle, description, date, skills, budget, deadline } = req.body;
        let post = await Project.findOne({ where: { projectId: id } });
        if (post) {
            console.log(post)
            let result = await Project.update({ projectName, jobTitle, description, date, skills, budget, deadline }, { where: { projectId: id } })
            if (result) {
                return res.status(200).json({ message: "Post updated Successfully", result });
            }
            else {
                return res.status(500).json({ error: "Internal Server Problem" })
            }
        }
        else {
            return res.status(401).json({ error: "User not found" })
        }

    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal Server Problem" })
    }
}


export const deletePost = async (req, res, next) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.log(errors);
            return res.status(401).json({ error: "Invalid input", errors })
        }
        let id = req.params.id;
        let post = await Project.findByPk(id);
        if (post) {
            console.log(post);
            let result = await Project.destroy({ where: { projectId: id } });
            if (result) {
                return res.status(200).json({ message: "Post deleted Successfully" });
            }
            else {
                return res.status(401).json({ error: "User not found" });
            }
        }
    }
    catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Internal Server Problem" })
    }
}

export const getPost = async(req, res, next) => {
    try {
    const id=req.params.id;
    let post = await Project.findByPk(id);
    if(post){
        return res.status(200).json({
            
        })
    }
     } catch (err) {
         console.log(err) ;
         return res.status(500).json({ error: "Internal Server Problem" }) }
}
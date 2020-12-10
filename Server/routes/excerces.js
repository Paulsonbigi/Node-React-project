import mongoose from "mongoose"
import express from "express"
const exerciseRouter = express.Router()
import Exercise from "../models/exercise.model.js"

exerciseRouter.route("/").get((req, res) => {
    Exercise.find()
    .then((excercises) => res.json(excercises))
    .catch(err => res.status(400).json("Error" + err))
})

exerciseRouter.route("/add").post((req, res) => {
    Exercise.create(req.body)
    .then(() => res.json('Exercise added'))
    .catch(err => res.status(400).json("Error" + err))
})

exerciseRouter.route("/:id").get((req, res) => {
    Exercise.findById(req.params.id)
        .then((exercise) => res.json(exercise))
        .catch(err => res.status(400).json("Error" + err))
})

exerciseRouter.route("/delete/:id").delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted'))
        .catch(err => res.status(400).json("Error" + err))
})

exerciseRouter.route("/update/:id").put((req, res, next) => {
    Exercise.findByIdAndUpdate(req.params.id, {
        $set: req.body
    })
        .then(() => res.json('Exercise updated'))
        .catch(err => res.status(400).json("Error" + err))
})

export default exerciseRouter
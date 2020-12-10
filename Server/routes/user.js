import mongoose from "mongoose"
import express, { Router } from "express"
const userRouter = express.Router()
import User from "../models/user.model.js"

userRouter.route("/").get((req, res) => {
    User.find()
    .then((users) => res.json(users))
    .catch(err => res.status(400).json("Error" + err))
})

userRouter.route("/:id").get((req, res) => {
    let id = req.params.id
    User.findById(id)
    .then((user) => res.json(user))
    .catch(err => res.status(400).json("Error" + err))
})

userRouter.route("/add").post((req, res) => {
    User.create(req.body)
    .then(() => res.json('user added'))
    .catch(err => res.status(400).json("Error" + err))
})

userRouter.route("/delete/:id").delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted'))
        .catch(err => res.status(400).json("Error" + err))
})

userRouter.route("/update/:id").put((req, res) => {
    User.findByIdAndUpdate(req.params.id, {
        $set: req.body
    })
        .then(() => res.json('Exercise updated'))
        .catch(err => res.status(400).json("Error" + err))
})
export default userRouter
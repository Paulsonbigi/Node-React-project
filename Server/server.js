import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import exerciseRouter from "./routes/excerces.js"
import userRouter from "./routes/user.js"
// import 
// mongoDb connection
const uri = "mongodb://localhost:27017/todo-db"
mongoose.connect(uri, {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connected successfully")
})
.catch(() => {
    console.log("Database unable to connect")
})

// connecting to port
const PORT = process.env.PORT || 4300

// middleware instances
const app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
app.use(cors());

// endpoints
app.use("/exercises", exerciseRouter)
app.use("/users", userRouter)

//  
app.listen(PORT, () => {
    console.log(`app listening on port ${PORT}`)
})
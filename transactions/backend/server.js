//import
import express from "express"
import cors from "cors"
import banking from "./api/banking.route.js"

//make express app
const app = express()

//middleware - things that express uses
app.use(cors())
app.use(express.json())

//initial routes/urls
app.use("api/v1/banking", banking)
app.use("*", (req, res) => res.status(404).json({error: "not found"}))

//export file as module
export default app
import express from "express"

//get access to router. since this is the route file required for people to go to different urls
const router = express.Router()

// demo route -> /
router.route("/").get((req, res) => res.send("test root"))

export default router
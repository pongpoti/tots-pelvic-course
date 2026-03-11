import express from "express"
const app = express()
const port = process.env.PORT || 8080
app.use("/", express.static("public"))
app.listen(port, () => { console.log("tots-pelvic-course-e-learning is live") })

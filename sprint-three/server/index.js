const express = require('express')
const cors = require('cors')
const app = express()

//route
const videoRoute = require("./routes/video")
const commentRoute = require("./routes/comment")

//config
require("dotenv").config();
const port = process.env.PORT || 8000;

//middleware
app.use(cors())
app.use(express.json());
app.use(express.static("public"))


app.use("/", videoRoute)
app.use("/", commentRoute)

app.listen(port,()=>console.log(`running on ${port}`))
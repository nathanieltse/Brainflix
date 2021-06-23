const express = require('express')
const cors = require('cors')
const app = express()

//route
const videoRoute = require("./routes/video")

//config
require("dotenv").config();
const port = process.env.PORT || 8000;

//middleware
app.use(cors())
app.use(express.json());


app.use("/", videoRoute)

app.listen(port,()=>console.log(`running on ${port}`))
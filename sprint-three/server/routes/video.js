const router = require('express').Router()
const videoData = require('../data/video-details.json')

router
    .get("/videos",(_req,res) => {
        const apiRes = videoData.map(data => {
            return {
                "id": data.id,
                "title": data.title,
                "channel": data.channel,
                "image": data.image
            }
        })
        res.status(200).send(apiRes)
    })

    .get("/videos/:id",(req,res) => {
        const videoId = req.params.id
        const selectedVideo = videoData.find(data => data.id === videoId)
        res.status(200).send(selectedVideo)
    })

    .post("/videos", (req,res) => {
        const newData = {
            "id":req.body.id,
            "title": req.body.title,
            "channel": req.body.channel,
            "image": req.body.image,
            "description": req.body.description,
            "views": 0,
            "likes": 0,
            "duration": req.body.duration,
            "video": req.body.video,
            "timestamp": req.body.timestamp,
            "comments": []
        }
        videoData.push(newData)
        res.status(200).send("suceess!")
    })

module.exports = router
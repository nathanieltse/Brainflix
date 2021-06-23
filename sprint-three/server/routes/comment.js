const router = require("express").Router()
const videoData = require('../data/video-details.json')

router
    .post("/videos/:id/comments", (req, res) => {
        const videoId = req.params.id
        const selectedVideo = videoData.find(video => video.id === videoId)
        newComment={
            "name": req.body.name,
            "comment": req.body.comment,
            "id": req.body.id,
            "likes": 0,
            "timestamp": req.body.timestamp
        }
        selectedVideo.comments.push(newComment)
        res.status(200).send(newComment)
    })

    .delete("/videos/:videoId/comments/:commentId", (req, res) => {
        const videoId = req.params.videoId
        const commentId = req.params.commentId
        const selectedVideo = videoData.find(video => video.id === videoId)
        const newComments = selectedVideo.comments.filter(comment => comment.id !== commentId)

        res.status(200).send(newComments)
    })

module.exports = router
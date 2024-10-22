const express = require("express");
const router = express.Router();

//Posts
//Index - Post
router.get("/", (req, res) => {
  res.send("Get for Post");
});

//Show post
router.get("/:id", (req, res) => {
  res.send("Get for show post");
});

//Post post
router.post("/", (req, res) => {
  res.send("Post for post");
});

//Delete post
router.delete("/:id", (req, res) => {
  res.send("Delete for post");
});

module.exports = router;

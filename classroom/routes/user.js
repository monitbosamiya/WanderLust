const express = require("express");
const router = express.Router();

//Index - user
router.get("/", (req, res) => {
  res.send("Get for User");
});

//Show User
router.get("/:id", (req, res) => {
  res.send("Get for Show user");
});

//Post user
router.post("/", (req, res) => {
  res.send("Post for user");
});

//Delete User
router.delete("/:id", (req, res) => {
  res.send("Delete for User");
});

module.exports = router;

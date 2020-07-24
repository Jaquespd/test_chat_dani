const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  return response.json({ message: "Server is up and running." }).status(200);
});

module.exports = router;
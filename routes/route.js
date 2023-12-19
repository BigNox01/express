const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("homescreen");
});

router.get("/services", (req, res) => {
  res.render("services");
});

router.get("/contact", (req, res) => {
  res.render("contact-us");
});

module.exports = router;

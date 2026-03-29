const express = require("express");
const path = require("path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res) => {
  //   console.log("shop.js", adminData.products);
  //   res.sendFile(path.join(__dirname, "../", "views", "shop.html"));
  res.render("shop", { products: adminData.products, jobTitle: "My Shop" });
});

module.exports = router;

const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
console.log(apiRoutes);
// API Routes
router.use("/api", apiRoutes);
// console.log("router");
// console.log(router);
// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;

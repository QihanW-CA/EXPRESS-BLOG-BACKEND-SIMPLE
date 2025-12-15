const express = require("express");
const router = express.Router();
const teController = require("../controller/testErrController");

router.get("/net", teController.getTestError, (err, req, res, next) => {
  if (err) {
    err.status = 404;
    next(err);
  }
});

module.exports = router;

import { Router } from "express";
const router = Router();
import { getTestError } from "../controller/testErrController";

//We will handle all errors in the router.
router.get("/net", getTestError, (err, req, res, next) => {
  if (err) {
    err.status = 404;
    next(err);
  }
});

export default router;

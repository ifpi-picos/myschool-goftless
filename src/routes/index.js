import express from "express";
import studentsRoute from "./students";

const router = express.Router();

router.use("/students", studentsRoute);

export default router;

import express from "express";
import studentsRoute from "./students";
import teachersRoute from "./teachers";

const router = express.Router();

router.use("/students", studentsRoute);
router.use("/teachers", teachersRoute);

export default router;

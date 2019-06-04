import express from "express";
import studentsRoute from "./students";
import teachersRoute from "./teachers";
import secretariesRoute from "./secretaries";

const router = express.Router();

router.use("/students", studentsRoute);
router.use("/teachers", teachersRoute);
router.use("/secretaries", secretariesRoute);

export default router;

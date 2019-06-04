import express from "express";
import Teacher from "../models/teacher";
import TeacherController from "../controllers/teachers";

const router = express.Router();

const teacherController = new TeacherController(Teacher);

router.get("/", (req, res) => teacherController.getAll(req, res));
router.get("/:id", (req, res) => teacherController.findById(req, res));
router.post("/", (req, res) => teacherController.create(req, res));
router.delete("/:id", (req, res) => teacherController.delete(req, res));
router.put("/:id", (req, res) => teacherController.update(req, res));

export default router;

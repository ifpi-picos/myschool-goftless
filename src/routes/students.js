import express from "express";
import Student from "../models/student";
import StudentController from "../controllers/students";

const router = express.Router();

const studentController = new StudentController(Student);

router.get("/", (req, res) => studentController.getAll(req, res));
router.get("/:id", (req, res) => studentController.findById(req, res));
router.post("/", (req, res) => studentController.create(req, res));
router.delete("/:id", (req, res) => studentController.delete(req, res));
router.put("/:id", (req, res) => studentController.update(req, res));

export default router;

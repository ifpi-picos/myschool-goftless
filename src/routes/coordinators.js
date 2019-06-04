import express from "express";
import Coordinator from "../models/coordinator";
import CoordinatorController from "../controllers/coordinators";

const router = express.Router();

const coordinatorController = new CoordinatorController(Coordinator);

router.get("/", (req, res) => coordinatorController.getAll(req, res));
router.get("/:id", (req, res) => coordinatorController.findById(req, res));
router.post("/", (req, res) => coordinatorController.create(req, res));
router.delete("/:id", (req, res) => coordinatorController.delete(req, res));
router.put("/:id", (req, res) => coordinatorController.update(req, res));

export default router;

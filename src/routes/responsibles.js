import express from "express";
import Responsible from "../models/responsible";
import ResponsibleController from "../controllers/responsibles";

const router = express.Router();

const responsibleController = new ResponsibleController(Responsible);

router.get("/", (req, res) => responsibleController.getAll(req, res));
router.get("/:id", (req, res) => responsibleController.findById(req, res));
router.post("/", (req, res) => responsibleController.create(req, res));
router.delete("/:id", (req, res) => responsibleController.delete(req, res));
router.put("/:id", (req, res) => responsibleController.update(req, res));

export default router;

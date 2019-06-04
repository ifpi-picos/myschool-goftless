import express from "express";
import Secretary from "../models/secretary";
import SecretaryController from "../controllers/secretaries";

const router = express.Router();

const secretaryController = new SecretaryController(Secretary);

router.get("/", (req, res) => secretaryController.getAll(req, res));
router.get("/:id", (req, res) => secretaryController.findById(req, res));
router.post("/", (req, res) => secretaryController.create(req, res));
router.delete("/:id", (req, res) => secretaryController.delete(req, res));
router.put("/:id", (req, res) => secretaryController.update(req, res));

export default router;

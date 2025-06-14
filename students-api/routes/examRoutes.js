import express from "express";
import {
  create,
  getAll,
  getById,
  update,
  remove,
} from "../controllers/examController.js";

const router = express.Router();

// POST /api/exams
router.post("/", create);

// GET /api/exams
router.get("/", getAll);

// GET /api/exams/:id
router.get("/:id", getById);

// PUT /api/exams/:id
router.put("/:id", update);

// DELETE /api/exams/:id
router.delete("/:id", remove);

export default router;

import express from "express";
import * as studentController from "../controllers/studentController.js";

const router = express.Router();

// POST /api/students
router.post("/", studentController.create);
// GET /api/students
router.get("/", studentController.getAll);
// GET /api/students/:id
router.get("/:id", studentController.getById);
// GET /api/students/index/:indexNumber
router.get("/index/:indexNumber", studentController.getByIndex);
// PUT /api/students/:id
router.put("/:id", studentController.update);
// DELETE /api/students/:id
router.delete("/:id", studentController.remove);

export default router;

import {
  createExam,
  getAllExams,
  getExamById,
  updateExam,
  deleteExam,
} from "../models/Exam.js";

import { Student } from "../models/Student.js";

export async function create(req, res) {
  try {
    const { studentId, subject, grade, examDate } = req.body;

    const student = await Student.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    const exam = await createExam({ studentId, subject, grade, examDate });
    res.status(201).json(exam);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getAll(req, res) {
  try {
    const exams = await getAllExams();
    res.status(200).json(exams);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getById(req, res) {
  try {
    const { id } = req.params;
    const exam = await getExamById(id);
    if (!exam) {
      return res.status(404).json({ message: "Exam not found" });
    }
    res.status(200).json(exam);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function update(req, res) {
  try {
    const { id } = req.params;
    const updated = await updateExam(id, req.body);
    if (!updated) {
      return res.status(404).json({ message: "Exam not found" });
    }
    res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function remove(req, res) {
  try {
    const { id } = req.params;
    const deleted = await deleteExam(id);
    if (!deleted) {
      return res.status(404).json({ message: "Exam not found" });
    }
    res.status(200).json({ message: "Exam has been deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

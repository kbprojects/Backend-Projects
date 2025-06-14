import mongoose from "mongoose";

const examSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    subject: { type: String, required: true },
    grade: { type: Number, required: true, min: 5, max: 10 },
    examDate: { type: Date, required: true },
  },
  { timestamps: true }
);

export const Exam = mongoose.model("Exam", examSchema);

// CRUD functions
export async function createExam(data) {
  try {
    return await Exam.create(data);
  } catch (error) {
    throw new Error("Error creating exam: " + error.message);
  }
}

export async function getAllExams() {
  try {
    return await Exam.find().populate("studentId");
  } catch (error) {
    throw new Error("Error fetching exams: " + error.message);
  }
}

export async function getExamById(id) {
  try {
    return await Exam.findById(id).populate("studentId");
  } catch (error) {
    throw new Error("Error fetching exam by Id: " + error.message);
  }
}

export async function updateExam(id, data) {
  try {
    return await Exam.findByIdAndUpdate(id, data, { new: true });
  } catch (error) {
    throw new Error("Error updating exam: " + error.message);
  }
}

export async function deleteExam(id) {
  try {
    return await Exam.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Error deleting exam: " + error.message);
  }
}

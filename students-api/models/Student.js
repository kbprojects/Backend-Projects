import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    indexNumber: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    enrollmentDate: { type: Date, required: true },
    major: { type: String, required: true },
  },
  { timestamps: true }
);

export const Student = mongoose.model("Student", studentSchema);

// CRUD functions
export async function createStudent(data) {
  try {
    return await Student.create(data);
  } catch (error) {
    throw new Error("Error creating student: " + error.message);
  }
}

export async function getAllStudents() {
  try {
    return await Student.find();
  } catch (error) {
    throw new Error("Error fetching students: " + error.message);
  }
}

export async function getStudentById(id) {
  try {
    return await Student.findById(id);
  } catch (error) {
    throw new Error("Error fetching student by Id: " + error.message);
  }
}

export async function getStudentByIndex(indexNumber) {
  try {
    return await Student.findOne({ indexNumber });
  } catch (error) {
    throw new Error("Error fetching student by index number: " + error.message);
  }
}

export async function updateStudent(id, data) {
  try {
    return await Student.findByIdAndUpdate(id, data, { new: true });
  } catch (error) {
    throw new Error("Error updating student: " + error.message);
  }
}

export async function deleteStudent(id) {
  try {
    return await Student.findByIdAndDelete(id);
  } catch (error) {
    throw new Error("Error deleting student: " + error.message);
  }
}

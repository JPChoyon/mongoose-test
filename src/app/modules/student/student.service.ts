import { Student } from './student.model';

const studentFindDb = async () => {
  const result = await Student.find();
  return result;
};

const studentFindOneDb = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

const deleteStudentFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};

export const StudentServices = {
  studentFindDb,
  studentFindOneDb,
  deleteStudentFromDB,
};

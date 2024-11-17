import { Student } from './student.interface';
import { StudentModel } from './student.model';

const studentCreateDb = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const studentFindDb = async () => {
  const result = await StudentModel.find();
  return result;
};

const studentFindOneDb = async (id: string) => {
  const result = await StudentModel.findOne({ id });
  return result;
};

export const StudentServices = {
  studentCreateDb,
  studentFindDb,
  studentFindOneDb,
};

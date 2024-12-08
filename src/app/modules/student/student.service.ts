import { Student } from './student.model';

const studentFindDb = async () => {
  const result = await Student.find();
  return result;
};

const studentFindOneDb = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const StudentServices = {
  studentFindDb,
  studentFindOneDb,
};

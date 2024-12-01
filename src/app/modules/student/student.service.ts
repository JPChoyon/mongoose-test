import { TStudent } from './student.interface';
import { Student } from './student.model';

const studentCreateDb = async (student: TStudent) => {
  const result = Student.create(student);
  if (await Student.isStudentExist(student.id)) {
    throw new Error('Student already exits');
  }
  // instance method
  // const studentData = new Student(student);
  // if (await studentData.isStudentExist(studentData.id)) {
  //   throw new Error('Student already exits');
  // }
  // const result = await studentData.save();
  return result;
};

const studentFindDb = async () => {
  const result = await Student.find();
  return result;
};

const studentFindOneDb = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const StudentServices = {
  studentCreateDb,
  studentFindDb,
  studentFindOneDb,
};

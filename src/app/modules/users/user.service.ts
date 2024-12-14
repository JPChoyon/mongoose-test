import config from '../../config';
import { TStudent } from '../student/student.interface';
import { TUser } from './user.interface';
import { UserModel } from './user.model';
import { Student } from '../student/student.model';
import { academicSemester } from '../academicSemester/academicSemester.model';
import { generateStudentId } from './user.utils';

const studentCreateDb = async (password: string, studentData: TStudent) => {
  const userData: Partial<TUser> = {};

  userData.password = password || (config.default_password as string);
  // find academic semester info
  const admissionSemester = await academicSemester.findById(
    studentData.admissionSemester,
  );
  //set  generated id
  userData.id = await generateStudentId(admissionSemester);

  // create a user
  const newUser = await UserModel.create(userData);

  //create a student
  if (Object.keys(newUser).length) {
    // set id , _id as user
    userData.id = newUser.id;
    userData.user = newUser._id; //reference _id

    const newStudent = await Student.create(userData);
    return newStudent;
  }
};

export const userServices = {
  studentCreateDb,
};
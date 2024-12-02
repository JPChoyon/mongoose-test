import config from '../../config';
import { TStudent } from '../student/student.interface';
import { TUser } from './user.interface';
import { UserModel } from './user.model';
import { Student } from '../student/student.model';

const studentCreateDb = async (password: string, studentData: TStudent) => {
  const userData: Partial<TUser> = {};

  userData.password = password || (config.default_password as string);

  userData.role = 'student';
  userData.id = '20301020';

  const result = await UserModel.create(userData);
  if (Object.keys(result).length) {
    studentData.id = result.id;
    studentData.user = result._id;

    const newStudent = await Student.create(studentData);
    return newStudent;
  }
};

export const userServices = {
  studentCreateDb,
};

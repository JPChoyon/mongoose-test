import { academicSemesterNameMapper, TAcademicSemester } from './academicSemester.interface';
import { academicSemester } from './academicSemester.model';

const academicSemesterCreateDB = async (payload: TAcademicSemester) => {
  if (academicSemesterNameMapper[payload.name] !== [payload.code]) {
    throw new Error('Invalid Semester Code');
  }
  const result = await academicSemester.create(payload);
  return result;
};
const academicSemesterFindDb = async () => {
  const result = await academicSemester.find();
  return result;
};

const academicSemesterFindOneDb = async (id: string) => {
  const result = await academicSemester.findOne({ id });
  return result;
};
const updateAcademicSemesterIntoDB = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  if (
    payload.name &&
    payload.code &&
    academicSemesterNameMapper[payload.name] !== payload.code
  ) {
    throw new Error('Invalid Semester Code');
  }

  const result = await academicSemester.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const academicSemesterServices = {
  academicSemesterCreateDB,
  academicSemesterFindDb,
  academicSemesterFindOneDb,
  updateAcademicSemesterIntoDB,
};
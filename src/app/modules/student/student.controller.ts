import { Request, Response } from 'express';
import { StudentServices } from './student.service';
import catchAsync from '../../utils/catchAsync';

const findStudent = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentServices.studentFindDb();
  res.status(200).send({
    success: true,
    message: 'student find successfully',
    data: result,
  });
});
const findOneStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await StudentServices.studentFindOneDb(id);
  res.status(200).send({
    success: true,
    message: 'single student find successfully',
    data: result,
  });
});

export const StudentController = {
  findStudent,
  findOneStudent,
};

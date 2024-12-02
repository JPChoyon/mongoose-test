/* eslint-disable no-console */
import { Request, Response } from 'express';
import { StudentServices } from './student.service';


const findStudent = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.studentFindDb();
    res.status(200).send({
      success: true,
      message: 'student find successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};
const findOneStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await StudentServices.studentFindOneDb(id);
    res.status(200).send({
      success: true,
      message: 'single student find successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const StudentController = {
  findStudent,
  findOneStudent,
};

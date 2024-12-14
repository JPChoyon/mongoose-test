/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import { academicSemesterServices } from './academicSemester.service';
import { academicSemesterNameMapper } from './academicSemester.interface';

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const result = await academicSemesterServices.academicSemesterCreateDB(
      req.body,
    );
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester is created successfully',
      data: result,
    });
  },
);
const findAcademicSemester = catchAsync(async (req: Request, res: Response) => {
  const result = await academicSemesterServices.academicSemesterFindDb();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic Semester are retrieve successfully',
    data: result,
  });
});
const findOneAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await academicSemesterServices.academicSemesterFindOneDb(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Academic Semester retrieve successfully',
      data: result,
    });
  },
);
const updateAcademicSemester = catchAsync(async (req, res) => {
  const { semesterId } = req.params;
  const result = await academicSemesterServices.updateAcademicSemesterIntoDB(
    semesterId,
    req.body,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Academic semester is updated successfully',
    data: result,
  });
});

export const academicSemesterController = {
  createAcademicSemester,
  findAcademicSemester,
  findOneAcademicSemester,
  updateAcademicSemester,
};
function next(err: any) {
  throw new Error('Function not implemented.');
}

/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response } from 'express';
import sendResponse from '../../utils/sendResponse';
import httpStatus from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import { academicSemesterServices } from './academicSemester.service';

const createAcademicSemester = catchAsync(
  async (req: Request, res: Response) => {
    console.log(req.body);
    
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

export const academicSemesterController = {
  createAcademicSemester,
};

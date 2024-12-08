import express from 'express';
import { userController } from './user.controller';
import { studentValidationSchemas } from '../student/student.validation';
import validateRequest from '../../utils/validateRequest';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(studentValidationSchemas.createStudentValidationSchema),
  userController.createStudent,
);

export const UserRoutes = router;

import express from 'express';
import { StudentController } from './student.controller';
import validateRequest from '../../middlewares/validateRequest';
import { studentValidationSchemas } from './student.validation';

export const router = express.Router();

router.get('/', StudentController.findStudent);
router.patch(
  '/:studentId',
  validateRequest(studentValidationSchemas.updateStudentValidationSchema),
  StudentController.updateStudent,
);
router.get('/:id', StudentController.findOneStudent);
router.get('/:id', StudentController.deleteStudent);

export const StudentRoutes = router;

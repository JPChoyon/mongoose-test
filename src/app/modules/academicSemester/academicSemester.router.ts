import express from 'express';
import { academicSemesterController } from './academicSemester.controller';
import validateRequest from '../../utils/validateRequest';
import { academicSemesterValidations } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(academicSemesterValidations.academicSemesterValidationSchema),
  academicSemesterController.createAcademicSemester,
);
router.get(
  '/:semesterId',
  academicSemesterController.findOneAcademicSemester,
);

router.patch(
  '/:semesterId',
  validateRequest(
    academicSemesterValidations.updateAcademicSemesterValidationSchema,
  ),
  academicSemesterController.updateAcademicSemester,
);

router.get('/', academicSemesterController.findAcademicSemester);

// router.get('/', StudentController.findStudent);
// router.get('/:id', StudentController.findOneStudent);

export const AcademicSemesterRoutes = router;

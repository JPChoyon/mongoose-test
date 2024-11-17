import express from 'express';
import { StudentController } from './student.controller';

const router = express.Router();

router.post('/create-student', StudentController.createStudent);
router.get('/', StudentController.findStudent);
router.get('/:id', StudentController.findOneStudent);

export const StudentRoutes = router;

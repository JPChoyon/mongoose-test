import express from 'express';
import { StudentController } from './student.controller';

export const router = express.Router();


router.get('/', StudentController.findStudent);
router.get('/:id', StudentController.findOneStudent);

export const StudentRoutes = router;

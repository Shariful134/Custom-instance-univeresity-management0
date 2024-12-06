import express from 'express';
import { StudentControlers } from './student.controllers';
import validateRequest from '../../midlewares/validateRequest';
import { studentValidationZod } from './student.zod.validation';

const router = express.Router();

router.get('', StudentControlers.getAllDataStudent);

router.get('/:id', StudentControlers.getsingleStudent);

router.patch(
  '/:id',
  validateRequest(studentValidationZod.updatedCreateStudentSchemaValidationZod),
  StudentControlers.updateStudent,
);

router.delete('/:id', StudentControlers.deletStudent);

export const StudentRoutes = router;

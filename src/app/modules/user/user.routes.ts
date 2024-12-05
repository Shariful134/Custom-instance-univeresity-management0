import express from 'express';
import { UserControllers } from './user.controllers';
import { studentValidationZod } from '../student/student.zod.validation';

import validateRequest from '../../midlewares/validateRequest';

const router = express.Router();

router.post(
  '/create-student',
  validateRequest(studentValidationZod.createStudentSchemaValidationZod),
  UserControllers.createStudent,
);

export const UserRoutes = router;

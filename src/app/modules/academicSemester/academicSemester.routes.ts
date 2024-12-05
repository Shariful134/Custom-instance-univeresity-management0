import express from 'express';
import { AcademicSemesterControlers } from './academicSemester.controlers';
import validateRequest from '../../midlewares/validateRequest';
import { AcademicSemesterValidation } from './academicSemester.validation';

const router = express.Router();

router.post(
  '/create-academic-semester',
  validateRequest(AcademicSemesterValidation.createAcademicSemesterValidation),
  AcademicSemesterControlers.createAcademicSemester,
);

router.get('/', AcademicSemesterControlers.getAllAcademicSemester);
router.get(
  '/:semesterId',
  AcademicSemesterControlers.getSingleAcademicSemester,
);

router.patch(
  '/:semesterId',
  validateRequest(AcademicSemesterValidation.updateAcademicSemesterValidation),
  AcademicSemesterControlers.updateAcademicSemester,
);

export const AcademicRoutes = router;

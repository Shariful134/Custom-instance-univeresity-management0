import express from 'express';
import validateRequest from '../../midlewares/validateRequest';
import { createAcademicValidation } from './academicFacalty.validation';
import { AcademicFacultyControllers } from './academicFaculty.controllers';

const router = express.Router();

router.post(
  '/create-academic-faculty',
  validateRequest(createAcademicValidation.createAcademicFacaltyValidation),
  AcademicFacultyControllers.createAcademicFaculty,
);

router.get('/', AcademicFacultyControllers.getAllAcademicFaculty);

router.get('/:facultyId', AcademicFacultyControllers.getSingleAcademicFaculty);

router.patch(
  '/:facultyId',
  validateRequest(createAcademicValidation.updateAcademicFacaltyValidation),
  AcademicFacultyControllers.updateAcademicFaculty,
);

export const AcademicFacultiesRoutes = router;

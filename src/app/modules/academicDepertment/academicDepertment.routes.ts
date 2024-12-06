import express from 'express';
import validateRequest from '../../midlewares/validateRequest';
import { AcademicDepertmentControllers } from './academicDepertment.controller';
import { AcademicDepertmentValidation } from './academicDepertment.validation';

const router = express.Router();

router.post(
  '/create-academic-depertment',
  validateRequest(
    AcademicDepertmentValidation.createAcademicDepertmentValidation,
  ),
  AcademicDepertmentControllers.createAcademicDepertment,
);

router.get('/', AcademicDepertmentControllers.getAllAcademicDepertment);

router.get(
  '/:depertmentId',
  AcademicDepertmentControllers.getSingleAcademicDepertment,
);

router.patch(
  '/:depertmentId',
  validateRequest(
    AcademicDepertmentValidation.updateAcademicDepertmentValidation,
  ),
  AcademicDepertmentControllers.updateAcademicDepertment,
);

export const AcademicDepertmentRoutes = router;

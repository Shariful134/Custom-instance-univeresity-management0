import { z } from 'zod';
const createAcademicFacaltyValidation = z.object({
  body: z.object({
    name: z.string({ invalid_type_error: 'Academic Facalty must be string' }),
  }),
});

// update academic faculty
const updateAcademicFacaltyValidation = z.object({
  body: z.object({
    name: z.string({ invalid_type_error: 'Academic Facalty must be string' }),
  }),
});

export const createAcademicValidation = {
  createAcademicFacaltyValidation,
  updateAcademicFacaltyValidation,
};

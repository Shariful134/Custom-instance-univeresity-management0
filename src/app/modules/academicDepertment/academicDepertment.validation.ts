import { z } from 'zod';

const createAcademicDepertmentValidation = z.object({
  body: z.object({
    name: z.string({
      invalid_type_error: 'Academic Depertmetn must be string',
      required_error: 'Name is required',
    }),
    academicFaculty: z.string({
      invalid_type_error: 'Academic Feculty must be string',
      required_error: 'Academic Faculty is required',
    }),
  }),
});

const updateAcademicDepertmentValidation = z.object({
  body: z.object({
    name: z
      .string({
        invalid_type_error: 'Academic Depertmetn must be string',
        required_error: 'Name is required',
      })
      .optional(),
    academicFaculty: z
      .string({
        invalid_type_error: 'Academic Feculty must be string',
        required_error: 'Academic Faculty is required',
      })
      .optional(),
  }),
});

export const AcademicDepertmentValidation = {
  createAcademicDepertmentValidation,
  updateAcademicDepertmentValidation,
};

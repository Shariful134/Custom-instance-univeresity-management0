import { z } from 'zod';
import {
  academicSemesterCode,
  academicSemesterName,
  Months,
} from './academicSemester.const';

//before create semester  validation check
const createAcademicSemesterValidation = z.object({
  body: z.object({
    name: z.enum([...academicSemesterName] as [string, ...string[]]),
    year: z.string(),
    code: z.enum([...academicSemesterCode] as [string, ...string[]]),
    startMonth: z.enum([...Months] as [string, ...string[]]),
    endMonth: z.enum([...Months] as [string, ...string[]]),
  }),
});

///before update semester validation check
const updateAcademicSemesterValidation = z.object({
  body: z.object({
    name: z.enum([...academicSemesterName] as [string, ...string[]]).optional(),
    year: z.string(),
    code: z.enum([...academicSemesterCode] as [string, ...string[]]).optional(),
    startMonth: z.enum([...Months] as [string, ...string[]]).optional(),
    endMonth: z.enum([...Months] as [string, ...string[]]).optional(),
  }),
});
export const AcademicSemesterValidation = {
  createAcademicSemesterValidation,
  updateAcademicSemesterValidation,
};

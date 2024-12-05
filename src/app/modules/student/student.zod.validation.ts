import { z } from 'zod';

// Zod Schema for UserName
const userSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, 'firstname is required')
    .refine((value) => value.charAt(0) === value.charAt(0).toUpperCase(), {
      message: '{VALUE} is not capitalieze formate',
    }),
  middleName: z.string().optional(),
  lastName: z
    .string()
    .min(1, 'latname is required')
    .refine((value) => /^[A-Za-z]+$/.test(value), {
      message: '{VALUE} is not supported',
    }),
});

// Zod Schema for Guardian
const guardianSchemaValidationZod = z.object({
  fatherName: z.string().min(1, 'fatherName is required'),
  fatherOccupation: z.string().min(1, 'fatherOccupation is required'),
  fatherContactNo: z.string().min(1, 'fatherContactNo is required'),
  motherName: z.string().min(1, 'motherName is required'),
  motherOccupation: z.string().min(1, 'motherOccupation is required'),
  motherContactNo: z.string().min(1, 'motherContactNo is required'),
});

// Zod Schema for LocalGurdian
const localGurdianSchemaValidationZod = z.object({
  name: z.string().min(1, 'name is required'),
  occupatioin: z.string().min(1, 'occupatioin is required'),
  contactNo: z.string().min(1, 'contactNo is required'),
  address: z.string().min(1, 'address is required'),
});

// Zod Schema for Student
const createStudentSchemaValidationZod = z.object({
  body: z.object({
    password: z.string().max(20),
    student: z.object({
      name: userSchema.refine((name) => !!name, {
        message: 'name is required',
      }),
      gender: z.enum(['male', 'female', 'other']),
      dateOfBirth: z.string().optional(),
      email: z.string().email('Invalid email').min(1, 'email is required'),
      avater: z.string().url('Invalid URL').min(1, 'avater is required'),
      contactNo: z.string().min(1, 'contactNo is required'),
      emergencyContactNo: z.string().min(1, 'emergencyContactNo is required'),
      bloodGroupe: z
        .enum(['A', 'B', 'AB', 'O', 'A+', 'B+', 'AB+', 'O+', 'B-', 'AB-', 'O-'])
        .optional(),
      presentAddress: z.string().min(1, 'presentAddress is required'),
      parmanentAddress: z.string().min(1, 'parmanentAddress is required'),
      gurdian: guardianSchemaValidationZod.refine((guardian) => !!guardian, {
        message: 'gurdian is required',
      }),
      localGurdian: localGurdianSchemaValidationZod.refine(
        (localGurdian) => !!localGurdian,
        {
          message: 'localGurdian is required',
        },
      ),
      profileImg: z.string().optional(),
      addmissionSemester: z.string(),
    }),
  }),
});

export const studentValidationZod = {
  createStudentSchemaValidationZod,
};

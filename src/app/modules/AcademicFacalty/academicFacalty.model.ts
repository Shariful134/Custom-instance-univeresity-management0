import { Schema, model } from 'mongoose';
import { TAcademicFaclty } from './academicFacalty.interface';

const AcademicFacaltySchema = new Schema<TAcademicFaclty>(
  {
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const AcademicFacalty = model<TAcademicFaclty>(
  'AcademicFacalty',
  AcademicFacaltySchema,
);

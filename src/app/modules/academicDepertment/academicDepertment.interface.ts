import { ObjectId } from 'mongoose';

export type TAcademicDepertment = {
  name: string;
  academicFaculty: ObjectId;
};

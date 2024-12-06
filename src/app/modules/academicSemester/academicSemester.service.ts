import { StatusCodes } from 'http-status-codes';
import { AppError } from '../../errors/appError';
import { academicSemesterCodeMapper } from './academicSemester.const';
import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  //semester name ==== semester code
  if (academicSemesterCodeMapper[payload.name] !== payload.code) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Invalid Semester Code');
  }
  const result = await AcademicSemester.create(payload);
  return result;
};

//get all academic semester
const getAllAcademicSemesterFromDB = async () => {
  const result = await AcademicSemester.find();
  return result;
};

//get single academic semester
const getSingleAcademicSemesterFromDB = async (id: string) => {
  const result = await AcademicSemester.findById(id);
  return result;
};

//updateAcademic semester
const updateAcademicSemesterIntoDB = async (
  id: string,
  payload: Partial<TAcademicSemester>,
) => {
  if (
    payload.name &&
    payload.code &&
    academicSemesterCodeMapper[payload.name] !== payload.code
  ) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Invalid Semester Code');
  }
  const result = await AcademicSemester.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
  updateAcademicSemesterIntoDB,
  getSingleAcademicSemesterFromDB,
  getAllAcademicSemesterFromDB,
};

import { TAcademicFaclty } from './academicFacalty.interface';
import { AcademicFacalty } from './academicFacalty.model';

//create faculty
const createAcademicFacaltyIntoDB = async (payload: TAcademicFaclty) => {
  const result = await AcademicFacalty.create(payload);
  return result;
};

//get all facalty
const getAllAcademicFacultyFromDB = async () => {
  const result = await AcademicFacalty.find();
  return result;
};

//get single AcademicFaculty
const getSingleAcademicFacultyFromeDB = async (id: string) => {
  const result = await AcademicFacalty.findById(id);
  return result;
};

//update AcademicFaculty
const updateAcademicFacultyIntoDB = async (
  id: string,
  payload: TAcademicFaclty,
) => {
  const result = await AcademicFacalty.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const AcademicFacaltyServices = {
  createAcademicFacaltyIntoDB,
  getAllAcademicFacultyFromDB,
  getSingleAcademicFacultyFromeDB,
  updateAcademicFacultyIntoDB,
};

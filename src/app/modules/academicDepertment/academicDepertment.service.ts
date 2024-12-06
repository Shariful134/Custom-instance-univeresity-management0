import { TAcademicDepertment } from './academicDepertment.interface';
import { AcademicDepertment } from './academicDepertment.model';

//create Academic Depertment
const createAcademicDepertmentIntoDB = async (payload: TAcademicDepertment) => {
  //   const isAcademicDepertmentExist = await AcademicDepertment.findOne({
  //     name: payload.name,
  //   });
  //   if (isAcademicDepertmentExist) {
  //     throw new Error('This Depertment is allready Exist');
  //   }
  const result = await AcademicDepertment.create(payload);
  return result;
};

//get all Academic Depertment
const getAllAcademicDepertmentFromDB = async () => {
  const result = await AcademicDepertment.find().populate('academicFaculty');
  return result;
};

//get single academicDepertment
const getSingleAcademicDepertmentFromeDB = async (id: string) => {
  const result =
    await AcademicDepertment.findById(id).populate('academicFaculty');
  return result;
};

//update AcademicDepertment
const updateAcademicDepertmentIntoDB = async (
  id: string,
  payload: TAcademicDepertment,
) => {
  const result = await AcademicDepertment.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    },
  );
  return result;
};

export const AcademicDepertmentServices = {
  createAcademicDepertmentIntoDB,
  getAllAcademicDepertmentFromDB,
  getSingleAcademicDepertmentFromeDB,
  updateAcademicDepertmentIntoDB,
};

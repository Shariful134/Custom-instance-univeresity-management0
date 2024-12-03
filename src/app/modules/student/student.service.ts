import { Student } from './student.model';

const getAllDataFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getsingleDataFromDB = async (id: string) => {
  // const result = await Student.findOne({ id });
  const result = await Student.aggregate([
    {
      $match: { id: id },
    },
  ]);
  return result;
};
const deletDataFromDB = async (id: string) => {
  const result = await Student.updateOne({ id }, { isDeleted: true });
  return result;
};
export const studentServices = {
  getAllDataFromDB,
  getsingleDataFromDB,
  deletDataFromDB,
};

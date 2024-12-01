import { TStudent } from './student.interface';
import { Student } from './student.model';

const createStudentIntDB = async (studnetData: TStudent) => {
  //creating a srtatic method
  if (await Student.isUserExists(studnetData.id)) {
    throw new Error('User allready exists');
  }
  const result = await Student.create(studnetData); //builtin static mathod

  //creating a custom instance method
  // const student = new Student(studnetData); //create an instance
  // if (await student.isUserExists(studnetData.id)) {
  //   throw new Error('User already exists!');
  // }
  // const result = await student.save(); //built in instance method in mongoose
  return result;
};

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
  createStudentIntDB,
  getAllDataFromDB,
  getsingleDataFromDB,
  deletDataFromDB,
};

import { TStudent } from './student.interface';
import { Student } from './student.model';

const createStudentIntDB = async (studnetData: TStudent) => {
  // const result = await StudentModel.create(studnet); //builtin static mathod
  const student = new Student(studnetData); //create an instance

  if (await student.isUserExists(studnetData.id)) {
    throw new Error('User already exists!');
  }
  const result = await student.save(); //built in instance method in mongoose
  return result;
};

const getAllDataFromDB = async () => {
  const result = await Student.find();
  return result;
};

const getsingleDataFromDB = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};
export const studentServices = {
  createStudentIntDB,
  getAllDataFromDB,
  getsingleDataFromDB,
};

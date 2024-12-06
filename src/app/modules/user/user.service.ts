import { StatusCodes } from 'http-status-codes';
import config from '../../config';
import { AppError } from '../../errors/appError';
//import { TAcademicSemester } from '../academicSemester/academicSemester.interface';
import { AcademicSemester } from '../academicSemester/academicSemester.model';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';
import { generateStudentId } from './user.utils';
import { startSession } from 'mongoose';

const createStudentIntDB = async (password: string, payload: TStudent) => {
  //create an Object named userData
  const userData: Partial<TUser> = {};

  //if password is not given then use default password
  userData.password = password || (config.default_password as string);

  //set student role
  userData.role = 'student';

  //find academic semester
  const addmissionSemester = await AcademicSemester.findById(
    payload.addmissionSemester,
  );

  if (!addmissionSemester) {
    throw new AppError(StatusCodes.NOT_FOUND, 'Admission semester not found');
  }
  const session = await startSession();

  try {
    session.startTransaction();
    //set  generated id
    userData.id = await generateStudentId(addmissionSemester);

    //create a user
    const newUser = await User.create([userData], { session });
    console.log(newUser);

    //create a student
    if (!newUser.length) {
      throw new AppError(StatusCodes.BAD_REQUEST, 'Failed to create User');
    }
    payload.id = newUser[0].id;
    payload.user = newUser[0]._id; //reference _id

    const newStudent = await Student.create([payload], { session });

    if (!newStudent.length) {
      throw new AppError(StatusCodes.BAD_REQUEST, 'Failed to create student');
    }

    await session.commitTransaction();
    await session.endSession();

    return newStudent;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
  }
};
export const UserServices = {
  createStudentIntDB,
};

import mongoose from 'mongoose';
import { Student } from './student.model';
import { AppError } from '../../errors/appError';
import { StatusCodes } from 'http-status-codes';
import { User } from '../user/user.model';
import { TStudent } from './student.interface';

const getAllDataFromDB = async () => {
  const result = await Student.find()
    .populate('addmissionSemester')
    .populate({
      path: 'academicDepertment',
      populate: {
        path: 'academicFaculty',
      },
    });
  return result;
};

const getsingleDataFromDB = async (id: string) => {
  // const result = await Student.findOne({ id });
  const result = await Student.findOne({ id })
    .populate('addmissionSemester')
    .populate({
      path: 'academicDepertment',
      populate: {
        path: 'academicFaculty',
      },
    });
  return result;
};

const updatedDataFromDB = async (id: string, payload: Partial<TStudent>) => {
  const { name, gurdian, localGurdian, ...remainingStudentData } = payload;
  const modifiedUpdateData: Record<string, unknown> = {
    ...remainingStudentData,
  };

  if (name && Object.keys(name).length) {
    for (const [key, value] of Object.entries(name)) {
      modifiedUpdateData[`name.${key}`] = value;
    }
  }

  if (gurdian && Object.keys(gurdian).length) {
    for (const [key, value] of Object.entries(gurdian)) {
      modifiedUpdateData[`gurdian.${key}`] = value;
    }
  }

  if (localGurdian && Object.keys(localGurdian).length) {
    for (const [key, value] of Object.entries(localGurdian)) {
      modifiedUpdateData[`localGurdian.${key}`] = value;
    }
  }

  console.log(modifiedUpdateData);

  const result = await Student.findOneAndUpdate({ id }, modifiedUpdateData, {
    new: true,
    runValidators: true,
  });

  return result;
};

const deletDataFromDB = async (id: string) => {
  const session = await mongoose.startSession();
  try {
    session.startTransaction();
    const deletedStudent = await Student.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );

    if (!deletedStudent) {
      throw new AppError(StatusCodes.BAD_REQUEST, 'Failed to student Data');
    }

    const deletedUser = await User.findOneAndUpdate(
      { id },
      { isDeleted: true },
      { new: true, session },
    );
    if (!deletedUser) {
      throw new AppError(StatusCodes.BAD_REQUEST, 'Failed to student Data');
    }

    await session.commitTransaction();
    await session.endSession();

    return deletedStudent;
  } catch (error) {
    await session.abortTransaction();
    await session.endSession();
  }
};
export const studentServices = {
  getAllDataFromDB,
  getsingleDataFromDB,
  deletDataFromDB,
  updatedDataFromDB,
};

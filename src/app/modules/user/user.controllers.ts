import { NextFunction, Request, Response } from 'express';
import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;

    // const zodParseData = studentSchemaValidationZod.parse(studentData);
    const result = await UserServices.createStudentIntDB(password, studentData);
    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'Student created successfully',
      data: result,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error) {
    next(error);
  }
};

export const UserControllers = {
  createStudent,
};

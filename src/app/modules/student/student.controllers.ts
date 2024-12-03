import { NextFunction, Request, Response } from 'express';
import { studentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';

//will call controler function
const getAllDataStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await studentServices.getAllDataFromDB();

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'Student retrived successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getsingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await studentServices.getsingleDataFromDB(id);

    sendResponse(res, {
      statusCode: StatusCodes.OK,
      success: true,
      message: 'Student retrived successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const deletStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await studentServices.deletDataFromDB(id);

    res.status(200).json({
      success: true,
      message: 'student is deleted successfully',
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const StudentControlers = {
  getAllDataStudent,
  getsingleStudent,
  deletStudent,
};

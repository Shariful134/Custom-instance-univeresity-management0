import { RequestHandler } from 'express';
import { studentServices } from './student.service';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';

//will call controler function
const getAllDataStudent: RequestHandler = async (req, res, next) => {
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

const getsingleStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await studentServices.getsingleDataFromDB(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Student retrived successfully',
    data: result,
  });
});

const updateStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { student } = req.body;
  const result = await studentServices.updatedDataFromDB(id, student);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Student updated successfully',
    data: result,
  });
});

const deletStudent = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await studentServices.deletDataFromDB(id);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Student is deleted successfully',
    data: result,
  });
});
export const StudentControlers = {
  getAllDataStudent,
  getsingleStudent,
  deletStudent,
  updateStudent,
};

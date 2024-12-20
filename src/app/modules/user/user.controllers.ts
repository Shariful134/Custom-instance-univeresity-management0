import { UserServices } from './user.service';
import sendResponse from '../../utils/sendResponse';
import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';

const createStudent = catchAsync(async (req, res) => {
  console.log(req.query);
  const { password, student: studentData } = req.body;
  const result = await UserServices.createStudentIntDB(password, studentData);
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'user created successfully',
    data: result,
  });
});
export const UserControllers = {
  createStudent,
};

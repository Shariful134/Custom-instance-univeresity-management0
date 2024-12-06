import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AcademicDepertmentServices } from './academicDepertment.service';

//create AcademicDepertment
const createAcademicDepertment = catchAsync(async (req, res) => {
  const academicFacaltyData = req.body;
  const result =
    await AcademicDepertmentServices.createAcademicDepertmentIntoDB(
      academicFacaltyData,
    );
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Academic Depertment created successfully',
    data: result,
  });
});

//get all AcademicDepertment
const getAllAcademicDepertment = catchAsync(async (req, res) => {
  const result =
    await AcademicDepertmentServices.getAllAcademicDepertmentFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Academic Depertment are retrieved successfully',
    data: result,
  });
});

//get single AcademicDepertment
const getSingleAcademicDepertment = catchAsync(async (req, res) => {
  const { depertmentId } = req.params;
  const result =
    await AcademicDepertmentServices.getSingleAcademicDepertmentFromeDB(
      depertmentId,
    );

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Academic Depertement is retrieved successfully',
    data: result,
  });
});

//update AcademicFaculty
const updateAcademicDepertment = catchAsync(async (req, res) => {
  const { depertmentId } = req.params;
  const result =
    await AcademicDepertmentServices.updateAcademicDepertmentIntoDB(
      depertmentId,
      req.body,
    );
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Academic Depertment is updated successfully',
    data: result,
  });
});
export const AcademicDepertmentControllers = {
  createAcademicDepertment,
  getAllAcademicDepertment,
  getSingleAcademicDepertment,
  updateAcademicDepertment,
};

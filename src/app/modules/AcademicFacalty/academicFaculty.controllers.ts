import { StatusCodes } from 'http-status-codes';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AcademicFacaltyServices } from './academicFacalty.service';

//create faculty
const createAcademicFaculty = catchAsync(async (req, res) => {
  const academicFacaltyData = req.body;
  const result =
    await AcademicFacaltyServices.createAcademicFacaltyIntoDB(
      academicFacaltyData,
    );
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Academic Faculty created successfully',
    data: result,
  });
});

//get all facalty
const getAllAcademicFaculty = catchAsync(async (req, res) => {
  const result = await AcademicFacaltyServices.getAllAcademicFacultyFromDB();
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Academic Faculty are retrived successfully',
    data: result,
  });
});

//get single AcademicFaculty
const getSingleAcademicFaculty = catchAsync(async (req, res) => {
  const { facultyId } = req.params;
  const result =
    await AcademicFacaltyServices.getSingleAcademicFacultyFromeDB(facultyId);

  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Academic Faculty is retrived successfully',
    data: result,
  });
});

//update AcademicFaculty
const updateAcademicFaculty = catchAsync(async (req, res) => {
  const { facultyId } = req.params;
  const result = await AcademicFacaltyServices.updateAcademicFacultyIntoDB(
    facultyId,
    req.body,
  );
  sendResponse(res, {
    statusCode: StatusCodes.OK,
    success: true,
    message: 'Academic Faculty is updated successfully',
    data: result,
  });
});
export const AcademicFacultyControllers = {
  createAcademicFaculty,
  getAllAcademicFaculty,
  getSingleAcademicFaculty,
  updateAcademicFaculty,
};

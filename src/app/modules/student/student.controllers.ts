import { Request, Response } from 'express';
import { studentServices } from './student.service';
import studentSchemaValidationZod from './student.zod.validation';
// import studentValidationSchema from './student.validation';

//will call controler function
const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;
    //data validation using joi pakage
    // const { error, value } = studentValidationSchema.validate(studentData);
    //will call service function to send this data
    // console.log('error:', error, 'value:', value);
    //data validation using zod
    const zodParseData = studentSchemaValidationZod.parse(studentData);
    const result = await studentServices.createStudentIntDB(zodParseData);

    // if (error) {
    //   res.status(400).json({
    //     success: true,
    //     message: 'somthing went wrong',
    //     error: error.details,
    //   });
    // }

    //send response
    res.status(200).json({
      success: true,
      message: 'student is created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: true,
      message: error.message || 'somthing went wrong',
      error: error,
    });
  }
};

const getAllDataStudent = async (req: Request, res: Response) => {
  try {
    const result = await studentServices.getAllDataFromDB();

    res.status(200).json({
      success: true,
      message: 'student is created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getsingleStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const result = await studentServices.getsingleDataFromDB(id);

    res.status(200).json({
      success: true,
      message: 'student is created successfully',
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentControlers = {
  createStudent,
  getAllDataStudent,
  getsingleStudent,
};

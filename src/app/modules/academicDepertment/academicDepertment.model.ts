import { Schema, model } from 'mongoose';
import { TAcademicDepertment } from './academicDepertment.interface';
import { AppError } from '../../errors/appError';
import { StatusCodes } from 'http-status-codes';

const academicDepertmentSchema = new Schema<TAcademicDepertment>(
  {
    name: { type: String, required: true, unique: true },
    academicFaculty: {
      type: Schema.Types.ObjectId,
      ref: 'AcademicFacalty',
    },
  },
  { timestamps: true },
);

//user pre middleware hooks to check duplicate depertment name
academicDepertmentSchema.pre('save', async function (next) {
  const isAcademicDepertmentExist = await AcademicDepertment.findOne({
    name: this.name,
  });
  if (isAcademicDepertmentExist) {
    throw new AppError(
      StatusCodes.NOT_FOUND,
      'This Academic Depertment is allready Exist!',
    );
  }
  next();
});
//uuser pre middleware hooks to check depertment by using ID
academicDepertmentSchema.pre('findOneAndUpdate', async function (next) {
  const query = this.getQuery();
  const isAcademicDepaertmentExist = await AcademicDepertment.findOne(query);
  if (!isAcademicDepaertmentExist) {
    throw new AppError(StatusCodes.NOT_FOUND, "This Depertment Doesn't Exist!");
  }
  next();
});

export const AcademicDepertment = model<TAcademicDepertment>(
  'academicDepertment',
  academicDepertmentSchema,
);

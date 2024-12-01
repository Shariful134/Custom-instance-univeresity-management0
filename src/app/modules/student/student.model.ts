import { Schema, model } from 'mongoose';
import {
  TGuardian,
  TLocalGurdian,
  TStudent,
  StudentMethod,
  StudentModel,
  TUserName,
} from './student.interface';

const userSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'firstname is required'],
    trim: true,
    // maxlength: 15,
    // minlength: 5,
    // validate: {
    //   validator: function (value: string) {
    //     const firstNameStr = value.charAt(0).toUpperCase() + value.substring(1);
    //     return firstNameStr === value;
    //   },
    //   message: '{VALUE} is not capitalieze formate',
    // },
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true, 'latname is required'],
    // validate: {
    //   validator: (value: string) => validator.isAlpha(value),
    //   message: '{VALUE} is not supported',
    // },
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContactNo: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContactNo: { type: String, required: true },
});

const localGurdianSchema = new Schema<TLocalGurdian>({
  name: { type: String, required: true },
  occupatioin: { type: String, required: true },
  contactNo: { type: String, required: true },
  address: { type: String, required: true },
});

const studentSchema = new Schema<TStudent, StudentModel, StudentMethod>({
  id: { type: String, required: true, unique: true },
  name: {
    type: userSchema,
    required: [true, 'name is required'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: '{VALUE} is not valid',
    },
    requird: true,
  },
  dateOfBirth: { type: String },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  avater: { type: String, required: true },
  contactNo: { type: String, required: true },
  emergencyContactNo: { type: String, required: true },
  bloodGroupe: {
    type: String,
    enum: ['A', 'B', 'AB', 'O', 'A+', 'B+', 'AB+', 'O+', 'B-', 'AB-', 'O-'],
  },

  presentAddress: { type: String, required: true },
  parmanentAddress: { type: String, required: true },
  gurdian: { type: guardianSchema, required: true },
  localGurdian: { type: localGurdianSchema, required: true },
  profileImg: { type: String },
  isActive: {
    type: String,
    ennum: ['active', 'blocked'],
    default: 'active',
  },
});

studentSchema.methods.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id: id });
  return existingUser;
};

export const Student = model<TStudent, StudentModel>('Student', studentSchema);
